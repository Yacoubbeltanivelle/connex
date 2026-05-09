"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";

const categories = [
  {
    label: "Eyewear",
    sub: "2 products",
    href: "/shop?category=eyewear",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=72&auto=format&fit=crop",
    bg: "#EDE9E4",
  },
  {
    label: "Earwear",
    sub: "2 products",
    href: "/shop?category=earwear",
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=72&auto=format&fit=crop",
    bg: "#E4E0DA",
  },
  {
    label: "Bundles",
    sub: "Save 15%",
    href: "/shop?category=bundle",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=72&auto=format&fit=crop",
    bg: "#DDD9D2",
  },
  {
    label: "Accessories",
    sub: "Cases & cables",
    href: "/shop?category=accessories",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=72&auto=format&fit=crop",
    bg: "#D6D2CB",
  },
];

export default function CategoryScroll() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cat-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cat-header",
          start: "top 88%",
        },
      });

      gsap.from(".cat-card", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cat-track",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef, dependencies: [ScrollTrigger] }
  );

  return (
    <section ref={sectionRef} className="section-pad bg-[#FAFAF9]">
      {/* Header */}
      <div className="container-xl">
        <div className="cat-header flex items-end justify-between mb-10">
          <div>
            <p className="label-caps text-[#A8A29E] mb-2">Browse</p>
            <h2 className="headline-lg text-[#0C0A09]">Shop by category</h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#0C0A09] transition-colors group"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View all
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </div>

      {/* Scrollable cards track */}
      <div className="container-xl">
        <div className="cat-track scroll-x-hide flex gap-4 pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="cat-card group flex-none w-[260px] sm:w-[300px] cursor-pointer"
            >
              {/* Image */}
              <div
                className="relative h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mb-4"
                style={{ background: cat.bg }}
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Label */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <p
                    className="text-[#0C0A09] font-medium"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "1rem" }}
                  >
                    {cat.label}
                  </p>
                  <p className="label-caps text-[#A8A29E] mt-0.5">{cat.sub}</p>
                </div>
                <ArrowRight
                  className="w-4 h-4 text-[#A8A29E] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#0C0A09]"
                  strokeWidth={1.75}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
