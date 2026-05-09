"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShoppingBag, SlidersHorizontal, X, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

/* Extended product list for visual richness */
const allProducts = [
  { ...(products[0]), category: "eyewear" },
  { ...(products[1]), category: "earwear" },
  {
    id: "vision-one-pro",
    name: "Vision One Pro",
    tagline: "Extended range + wider FOV display.",
    price: 449,
    originalPrice: 499,
    badge: "Coming Soon",
    category: "eyewear",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=72&auto=format&fit=crop",
    colors: ["#1d1d1f", "#c8a882"],
  },
  {
    id: "aura-lite",
    name: "Aura Lite",
    tagline: "Everyday translation earbuds. Lighter.",
    price: 179,
    badge: "New",
    category: "earwear",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=72&auto=format&fit=crop",
    colors: ["#1d1d1f", "#f5f5f7"],
  },
  {
    id: "connex-bundle",
    name: "Connex Bundle",
    tagline: "Vision One + Aura One. Save 15%.",
    price: 499,
    originalPrice: 598,
    badge: "Best Value",
    category: "bundle",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=72&auto=format&fit=crop",
    colors: ["#1d1d1f"],
  },
  {
    id: "carry-case",
    name: "Premium Carry Case",
    tagline: "Italian leather. Fits both devices.",
    price: 69,
    badge: undefined,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=72&auto=format&fit=crop",
    colors: ["#1d1d1f", "#c8a882"],
  },
] as Array<{
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  category: string;
  image: string;
  colors?: string[];
}>;

const filters = [
  { id: "all", label: "All" },
  { id: "eyewear", label: "Eyewear" },
  { id: "earwear", label: "Earwear" },
  { id: "bundle", label: "Bundles" },
  { id: "accessories", label: "Accessories" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low → High" },
  { id: "price-desc", label: "Price: High → Low" },
];

function ShopCard({ p }: { p: typeof allProducts[number] }) {
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
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/products/${p.id}`} className="product-card group block">
        {/* Image */}
        <div className="product-card-image aspect-[4/5] relative">
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
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
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
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
                <><Check className="w-4 h-4" strokeWidth={2} /> Added</>
              ) : isComingSoon ? (
                "Coming Soon"
              ) : (
                <><ShoppingBag className="w-4 h-4" strokeWidth={1.75} /> Quick add</>
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
            <div className="flex items-baseline gap-2">
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
              {p.originalPrice && (
                <p
                  className="text-[#A8A29E] line-through"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}
                >
                  ${p.originalPrice}
                </p>
              )}
            </div>
            {p.colors && (
              <div className="flex items-center gap-1">
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
    </motion.div>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(searchParams.get("category") ?? "all");
  const [activeSort, setActiveSort] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = allProducts
    .filter((p) => activeFilter === "all" || p.category === activeFilter)
    .sort((a, b) => {
      if (activeSort === "price-asc") return a.price - b.price;
      if (activeSort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAF9] min-h-screen">

        {/* ── Page hero ─────────────────────────────── */}
        <div className="bg-[#FAFAF9] border-b border-[#E7E5E3]">
          <div className="container-xl pt-16 pb-12">
            <div className="plp-hero">
              <p className="label-caps text-[#A8A29E] mb-3">Collection</p>
              <h1
                className="text-[#0C0A09] leading-[0.9] mb-6"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                All Products.
              </h1>
              <p
                className="text-[#57534E] max-w-md"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                AI-powered wearables that break language barriers in real time.
                Designed for daily life — lightweight, invisible, effortless.
              </p>
            </div>
          </div>
        </div>

        {/* ── Filter + sort bar ─────────────────────── */}
        <div className="sticky top-14 z-30 bg-white/90 border-b border-[#E7E5E3] backdrop-blur-sm">
          <div className="container-xl">
            <div className="flex items-center justify-between h-14 gap-4">
              {/* Desktop filters */}
              <div className="hidden md:flex items-center gap-1">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeFilter === f.id
                        ? "bg-[#0C0A09] text-white"
                        : "text-[#57534E] hover:text-[#0C0A09] hover:bg-[#F5F4F0]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Mobile filter trigger */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-medium text-[#57534E] cursor-pointer"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.75} />
                Filter
              </button>

              {/* Count + sort */}
              <div className="flex items-center gap-4 ml-auto">
                <p
                  className="text-sm text-[#A8A29E] hidden sm:block"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {filtered.length} products
                </p>
                <select
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  className="text-sm font-medium text-[#57534E] bg-transparent border-none outline-none cursor-pointer hover:text-[#0C0A09] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {sortOptions.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile filter drawer ──────────────────── */}
        <AnimatePresence>
          {mobileFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-40 md:hidden"
                onClick={() => setMobileFilterOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl p-6 md:hidden"
              >
                <div className="flex items-center justify-between mb-8">
                  <p
                    className="text-lg font-semibold text-[#0C0A09]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Filter
                  </p>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5F4F0] transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4 text-[#57534E]" strokeWidth={1.75} />
                  </button>
                </div>
                <div className="space-y-1">
                  {filters.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setActiveFilter(f.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                        activeFilter === f.id
                          ? "bg-[#0C0A09] text-white"
                          : "text-[#57534E] hover:bg-[#F5F4F0]"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {f.label}
                      {activeFilter === f.id && <Check className="w-4 h-4" strokeWidth={2} />}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Product grid ──────────────────────────── */}
        <div className="container-xl section-pad">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p
                className="text-[#A8A29E] text-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                No products in this category yet.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <ShopCard key={p.id} p={p} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* ── Help strip ────────────────────────────── */}
        <div className="bg-[#F5F4F0] border-t border-[#E7E5E3]">
          <div className="container-xl py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="label-caps text-[#A8A29E] mb-2">Need help?</p>
                <h3
                  className="text-[#0C0A09]"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Find your perfect device.
                </h3>
              </div>
              <Link href="/about" className="btn-dark flex-none">
                Compare products
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
