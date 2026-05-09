"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Vision One", href: "/products/vision-one" },
  { label: "Aura One", href: "/products/aura-one" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="announce-bar">
        Free shipping on all orders · Early access pricing - limited time
      </div>

      <motion.header
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-white/95 nav-blur",
          scrolled ? "border-b border-[#d2d2d7] shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "border-b border-[#e8e8ed]"
        )}
      >
        <nav className="container-xl h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 select-none flex items-center gap-2.5 rounded-full border border-[#0C0A09]/10 bg-[#0C0A09] px-3.5 py-2 text-white shadow-[0_10px_30px_rgba(12,10,9,0.12)] transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Connex home"
          >
            {/* Geometric mark */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="9" height="9" rx="2.5" fill="#FFFFFF" />
              <rect x="13" y="2" width="9" height="9" rx="2.5" fill="#F59E0B" />
              <rect x="2" y="13" width="9" height="9" rx="2.5" fill="#F59E0B" />
              <rect x="13" y="13" width="9" height="9" rx="2.5" fill="#FFFFFF" />
            </svg>
            <span
              className="text-[18px] font-bold tracking-[0] leading-none text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Connex
            </span>
          </Link>

          {/* Desktop links — centered */}
          <div className="hidden md:flex items-center gap-0 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1">
            <button
              className="hidden md:flex w-9 h-9 items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" strokeWidth={1.75} />
            </button>

            <button
              onClick={() => openCart(true)}
              className="relative w-9 h-9 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.75} />
              {count > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#CCFF00] text-[#0C0A09] text-[10px] font-semibold flex items-center justify-center leading-none">
                  {count}
                </span>
              )}
            </button>

            <Link
              href="/shop"
              className="hidden md:inline-flex btn-dark text-[13px] py-2 px-4 ml-1"
            >
              Shop now
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full transition-colors ml-1"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-5 h-5" strokeWidth={1.75} /> : <Menu className="w-5 h-5" strokeWidth={1.75} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[96px] z-40 bg-white border-b border-[#d2d2d7] md:hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-0.5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-medium text-[#1d1d1f] border-b border-[#f0f0f3] last:border-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {l.label}
                  <ChevronRight className="w-4 h-4 text-[#a1a1a6]" strokeWidth={1.75} />
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link href="/shop" onClick={() => setOpen(false)} className="btn-dark w-full justify-center text-sm">
                  Shop now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
