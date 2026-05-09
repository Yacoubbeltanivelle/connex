"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductCarouselItem {
  id: string;
  name: string;
  eyebrow: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  deliveryTime: string;
  imageUrl: string;
  href: string;
  accent?: string;
}

interface ProductCarouselProps {
  title: React.ReactNode;
  products: ProductCarouselItem[];
  viewAllHref?: string;
  className?: string;
}

function ProductCard({ product }: { product: ProductCarouselItem }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group w-[200px] shrink-0 snap-start"
    >
      <Link
        href={product.href}
        className="block overflow-hidden rounded-[20px] bg-white shadow-[0_10px_34px_rgba(12,10,9,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(12,10,9,0.13)]"
      >
        <div
          className="relative h-[196px] overflow-hidden"
          style={{ background: product.accent ?? "#f5f5f7" }}
        >
          {product.discount && (
            <div className="absolute left-4 top-4 z-10 rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-[#111111]">
              {product.discount}
            </div>
          )}
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="200px"
          />
        </div>

        <div className="space-y-3 p-[18px]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#6e6e73]">
            <Clock className="h-3.5 w-3.5" />
            <span>{product.deliveryTime}</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#ff5a1f]">
              {product.eyebrow}
            </p>
            <h3 className="mt-1 min-h-11 text-base font-bold leading-tight text-[#1d1d1f]">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-black text-[#1d1d1f]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-[#86868b] line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] transition group-hover:border-[#1d1d1f] group-hover:bg-[#1d1d1f] group-hover:text-white">
              <Plus className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export const ProductCarousel = React.forwardRef<
  HTMLDivElement,
  ProductCarouselProps
>(({ title, products, viewAllHref = "/shop", className }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = React.useState(false);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -el.clientWidth * 0.82 : el.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  const checkScrollState = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsScrollable(el.scrollWidth > el.clientWidth);
    setIsAtStart(el.scrollLeft <= 1);
    setIsAtEnd(Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) < 2);
  }, []);

  React.useEffect(() => {
    checkScrollState();
    const el = scrollContainerRef.current;
    el?.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el?.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState]);

  return (
    <section ref={ref} className={cn("relative w-full py-10", className)}>
      <div className="container-xl mb-6 flex items-end justify-between gap-6">
        <h2
          className="max-w-3xl text-3xl font-bold leading-tight text-[#1d1d1f] md:text-4xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h2>
        <Link
          href={viewAllHref}
          className="hidden rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black sm:inline-flex"
        >
          View all
        </Link>
      </div>

      <div className="container-xl relative overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          className="scroll-x-hide flex snap-x gap-4 overflow-x-auto pb-3"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          initial={false}
          animate="visible"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {isScrollable && (
          <>
            <button
              onClick={() => handleScroll("left")}
              disabled={isAtStart}
              aria-label="Scroll left"
              className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-[0_8px_28px_rgba(12,10,9,0.16)] transition disabled:opacity-0 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={isAtEnd}
              aria-label="Scroll right"
              className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-[0_8px_28px_rgba(12,10,9,0.16)] transition disabled:opacity-0 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
});

ProductCarousel.displayName = "ProductCarousel";
