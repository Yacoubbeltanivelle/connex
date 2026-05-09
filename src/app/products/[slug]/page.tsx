"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ShoppingBag,
  Check,
  ArrowRight,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
  Zap,
  Globe2,
  Eye,
  BatteryCharging,
  Mic,
  Volume2,
  Headphones,
  BadgeDollarSign,
  Package,
  Ruler,
  Sparkles,
  LockKeyhole,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const colorNames: Record<string, string> = {
  "#1d1d1f": "Space Black",
  "#f5f5f7": "Silver",
  "#c8a882": "Starlight",
};

function getFeatureIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("language")) return Globe2;
  if (t.includes("display") || t.includes("fov")) return Eye;
  if (t.includes("battery")) return BatteryCharging;
  if (t.includes("microphone")) return Mic;
  if (t.includes("noise") || t.includes("transparency")) return Volume2;
  if (t.includes("aura")) return Headphones;
  if (t.includes("save")) return BadgeDollarSign;
  if (t.includes("box") || t.includes("included")) return Package;
  if (t.includes("slim") || t.includes("profile")) return Ruler;
  if (t.includes("magnetic") || t.includes("closure")) return LockKeyhole;
  if (t.includes("latency")) return Zap;
  return Sparkles;
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProduct(slug);

  const [activeImg, setActiveImg] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  if (!product) return notFound();

  const other = products.find((p) => p.id !== product.id) ?? products[0];

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product!.id,
        name: product!.name,
        price: product!.price,
        image: product!.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  const colorLabel =
    colorNames[product.colors[activeColor]] ?? `Finish ${activeColor + 1}`;

  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAF9] min-h-screen">

        {/* ── Breadcrumb ───────────────────────────────── */}
        <div className="bg-white border-b border-[#E7E5E3] pt-14">
          <div className="container-xl py-3">
            <nav
              className="flex items-center gap-1.5 text-xs text-[#A8A29E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Link href="/" className="hover:text-[#0C0A09] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/shop" className="hover:text-[#0C0A09] transition-colors">
                Shop
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#0C0A09]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ── Product hero ─────────────────────────────── */}
        <div className="container-xl py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">

            {/* ── Gallery ─── */}
            <div className="pdp-gallery space-y-4 lg:sticky lg:top-[88px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0.6, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-[#F0EEE9]"
                >
                  <Image
                    src={product.images[activeImg]}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Badge overlay */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-dark">{product.badge}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition-all ${
                        i === activeImg
                          ? "ring-2 ring-[#0C0A09] ring-offset-2 ring-offset-[#FAFAF9]"
                          : "ring-1 ring-[#E7E5E3] hover:ring-[#A8A29E]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Product info ─── */}
            <div className="pdp-info space-y-8">
              {/* Header */}
              <div>
                {product.badge && (
                  <p className="label-caps text-[#CA8A04] mb-3">{product.badge}</p>
                )}
                <h1
                  className="text-[#0C0A09] mb-3"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                  }}
                >
                  {product.name}
                </h1>
                <p
                  className="text-[#57534E] leading-relaxed max-w-md"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "1rem" }}
                >
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="pb-6 border-b border-[#E7E5E3]">
                <p className="label-caps text-[#A8A29E] mb-1.5">Price</p>
                <p
                  className="text-[#0C0A09]"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  ${product.price}
                  <span
                    className="text-[#A8A29E] ml-2"
                    style={{ fontSize: "0.4em", fontWeight: 400, letterSpacing: 0 }}
                  >
                    USD
                  </span>
                </p>
              </div>

              {/* Color selector */}
              <div>
                <p className="label-caps text-[#A8A29E] mb-3">
                  Finish —{" "}
                  <span
                    className="normal-case font-medium text-[#0C0A09]"
                    style={{ letterSpacing: 0 }}
                  >
                    {colorLabel}
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(i)}
                      className={`w-9 h-9 rounded-full cursor-pointer transition-all ${
                        i === activeColor
                          ? "ring-2 ring-offset-2 ring-[#0C0A09] ring-offset-[#FAFAF9]"
                          : "ring-1 ring-[#E7E5E3] hover:ring-[#A8A29E]"
                      }`}
                      style={{ background: color }}
                      aria-label={colorNames[color] ?? `Color ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="label-caps text-[#A8A29E] mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#E7E5E3] rounded-full overflow-hidden bg-white">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-[#57534E] hover:text-[#0C0A09] hover:bg-[#F5F4F0] transition-colors cursor-pointer"
                      aria-label="Decrease"
                    >
                      <Minus className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                    <span
                      className="w-10 text-center text-[#0C0A09] font-medium text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => Math.min(10, q + 1))}
                      className="w-10 h-10 flex items-center justify-center text-[#57534E] hover:text-[#0C0A09] hover:bg-[#F5F4F0] transition-colors cursor-pointer"
                      aria-label="Increase"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                  <p
                    className="text-sm text-[#A8A29E]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Total:{" "}
                    <span className="text-[#0C0A09] font-semibold">
                      ${(product.price * qty).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <motion.button
                  onClick={handleAdd}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${
                    added
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#0C0A09] text-white hover:bg-black"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" strokeWidth={2} />
                      Added to cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
                      Add to Cart — ${(product.price * qty).toLocaleString()}
                    </>
                  )}
                </motion.button>
                <button
                  onClick={() => {
                    for (let i = 0; i < qty; i++) {
                      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
                    }
                    router.push("/checkout");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-medium border border-[#E7E5E3] text-[#0C0A09] hover:border-[#0C0A09] hover:bg-[#F5F4F0] transition-all cursor-pointer"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Buy now
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Truck, label: "Free shipping", sub: "On all orders" },
                  { icon: RotateCcw, label: "30-day returns", sub: "No questions asked" },
                  { icon: Shield, label: "2-year warranty", sub: "Full coverage" },
                  { icon: Zap, label: "Fast delivery", sub: "2-3 business days" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E7E5E3]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F5F4F0] flex items-center justify-center flex-none">
                      <Icon className="w-4 h-4 text-[#57534E]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p
                        className="text-[#0C0A09] text-sm font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[#A8A29E] text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key features */}
              <div className="space-y-3 pt-2">
                <p className="label-caps text-[#A8A29E]">Key features</p>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((f) => {
                    const FeatureIcon = getFeatureIcon(f.title);

                    return (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E7E5E3]"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#FFF1E8] flex items-center justify-center flex-none text-[#FF5A1F]">
                        <FeatureIcon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p
                          className="text-[#0C0A09] font-semibold text-sm mb-0.5"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {f.title}
                        </p>
                        <p
                          className="text-[#57534E] text-sm"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Specs section ────────────────────────────── */}
        <div className="bg-white border-t border-[#E7E5E3]">
          <div className="container-xl py-16">
            <div className="pdp-specs">
              <p className="label-caps text-[#A8A29E] mb-2">Specifications</p>
              <h2
                className="text-[#0C0A09] mb-10"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                }}
              >
                Technical details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E7E5E3] rounded-2xl overflow-hidden">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="pdp-spec-row bg-white px-6 py-4 flex items-center justify-between"
                  >
                    <span
                      className="text-sm text-[#57534E]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-sm font-semibold text-[#0C0A09]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── You might also like ──────────────────────── */}
        <div className="bg-[#F5F4F0] border-t border-[#E7E5E3]">
          <div className="container-xl py-16">
            <p className="label-caps text-[#A8A29E] mb-2">You might also like</p>
            <h2
              className="text-[#0C0A09] mb-10"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
              }}
            >
              Complete your setup.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-center">
              {/* Other product card */}
              <Link
                href={`/products/${other.id}`}
                className="group relative rounded-2xl overflow-hidden aspect-[16/9] block"
              >
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="label-caps text-[#CA8A04] mb-2">{other.badge}</p>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {other.name}
                  </h3>
                  <p
                    className="text-white/70 mb-4 max-w-xs"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
                  >
                    {other.tagline}
                  </p>
                  <span className="btn-ghost-white text-sm inline-flex">
                    From ${other.price}
                    <ArrowRight
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </Link>

              {/* Bundle card */}
              <div className="bg-[#1C1917] rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="badge badge-accent mb-4 inline-flex">Best Value</span>
                  <h3
                    className="text-[#FAFAF9] mb-3"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    Connex Bundle
                  </h3>
                  <p
                    className="text-[#78716C] mb-6"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", lineHeight: 1.6 }}
                  >
                    Get Vision One + Aura One together and save $99. The complete AI
                    translation experience.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-[#FAFAF9]"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      $499
                    </p>
                    <p
                      className="text-[#57534E] line-through text-sm mt-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      $598
                    </p>
                  </div>
                  <Link
                    href="/checkout?bundle=true"
                    className="btn-ghost-white text-sm"
                  >
                    Buy bundle
                    <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
