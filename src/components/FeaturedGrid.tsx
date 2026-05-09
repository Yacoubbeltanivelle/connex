"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Check } from "lucide-react";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

/* Show first 4 products — all IDs match entries in products.ts */
const gridItems = products.slice(0, 4);

function ProductCard({ p }: { p: (typeof gridItems)[number] }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const isComingSoon = p.badge === "Coming Soon";

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    if (isComingSoon) return;
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <Link href={`/products/${p.id}`} className="product-card group block">
      {/* Image */}
      <div className="product-card-image aspect-square relative">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badge */}
        {p.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`badge ${
                p.badge === "Best Value" ? "badge-accent" : "badge-dark"
              }`}
            >
              {p.badge}
            </span>
          </div>
        )}
        {/* Quick-add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <button
            onClick={handleAdd}
            disabled={isComingSoon}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              isComingSoon
                ? "bg-white/80 text-[#A8A29E] cursor-not-allowed"
                : added
                ? "bg-[#16A34A] text-white"
                : "bg-white text-[#0C0A09] hover:bg-[#0C0A09] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-inter)", backdropFilter: "blur(12px)" }}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" strokeWidth={2} />
                Added
              </>
            ) : isComingSoon ? (
              "Coming Soon"
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
                Quick add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-1">
        <p
          className="text-[#0C0A09] font-medium"
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
        >
          {p.name}
        </p>
        <p
          className="text-[#A8A29E]"
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}
        >
          {p.tagline}
        </p>
        <div className="flex items-center justify-between pt-2">
          <p
            className="text-[#0C0A09] font-semibold"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            ${p.price}
          </p>
          {p.colors && (
            <div className="flex items-center gap-1.5">
              {p.colors.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="w-3.5 h-3.5 rounded-full border border-white ring-1 ring-[#E7E5E3]"
                  style={{ background: c }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".feat-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feat-header",
          start: "top 88%",
        },
      });

      gsap.from(".feat-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feat-grid",
          start: "top 88%",
        },
      });
    },
    { scope: sectionRef, dependencies: [ScrollTrigger] }
  );

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="feat-header flex items-end justify-between mb-10">
          <div>
            <p className="label-caps text-[#A8A29E] mb-2">Our products</p>
            <h2 className="headline-lg text-[#0C0A09]">Featured collection</h2>
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

        {/* Grid */}
        <div className="feat-grid grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {gridItems.map((p) => (
            <div key={p.id} className="feat-card">
              <ProductCard p={p} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/shop" className="btn-outline">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
