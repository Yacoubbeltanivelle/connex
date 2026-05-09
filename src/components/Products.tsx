"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: "eyewear",
    label: "CONNEX EYEWEAR",
    name: "Vision One",
    tagline: "See the world in every language",
    price: "$349",
    originalPrice: "$449",
    rating: 4.9,
    reviews: 2847,
    color: "#4f6ef7",
    gradient: "from-[#4f6ef7]/20 to-transparent",
    badge: "NEW",
    features: [
      "Real-time AR translation overlay",
      "50+ languages supported",
      "Titanium-reinforced frame",
      "12-hour battery life",
      "Prescription lens compatible",
      "UV400 protection",
      "Touch-sensitive temple controls",
      "IPX4 splash resistant",
    ],
    specs: [
      { label: "Weight", value: "38g" },
      { label: "Display", value: "Micro-OLED" },
      { label: "Processor", value: "Connex N1" },
      { label: "Battery", value: "12h / 60h case" },
    ],
    variants: ["Midnight Black", "Arctic Silver", "Deep Navy"],
  },
  {
    id: "earwear",
    label: "CONNEX EARWEAR",
    name: "Aura One",
    tagline: "Hear every language like your own",
    price: "$249",
    originalPrice: "$329",
    rating: 4.8,
    reviews: 5124,
    color: "#38bdf8",
    gradient: "from-[#38bdf8]/20 to-transparent",
    badge: "BEST SELLER",
    features: [
      "In-ear real-time translation",
      "50+ languages supported",
      "Active Noise Cancellation −40dB",
      "32-hour total battery (case)",
      "Ambient sound passthrough",
      "Voice activity detection",
      "Multipoint Bluetooth 5.3",
      "IPX5 sweat & rain resistant",
    ],
    specs: [
      { label: "Weight", value: "5.6g each" },
      { label: "Driver", value: "11mm dynamic" },
      { label: "Processor", value: "Connex A1" },
      { label: "Battery", value: "8h / 32h case" },
    ],
    variants: ["Graphite", "Pearl White", "Cobalt Blue"],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-28 bg-[#080f1d] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-[#4f6ef7] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            The Collection
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Choose your{" "}
            <span className="gradient-text">connection.</span>
          </h2>
          <p className="text-[#94a3b8] text-lg mt-5 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Two devices. One ecosystem. Seamlessly crafted for how you live.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-white/8 bg-[#0f1e35] overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute top-0 left-0 right-0 h-64 bg-gradient-to-b ${product.gradient} opacity-60`}
              />

              <div className="relative p-8">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: product.color, fontFamily: "var(--font-inter)" }}
                    >
                      {product.label}
                    </span>
                    <h3
                      className="text-3xl font-extrabold text-white mt-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                      {product.tagline}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-xl text-xs font-bold"
                    style={{
                      color: product.color,
                      backgroundColor: `${product.color}18`,
                      border: `1px solid ${product.color}30`,
                    }}
                  >
                    {product.badge}
                  </div>
                </div>

                {/* Product visual */}
                <div className="relative h-48 rounded-2xl bg-[#0b1628] border border-white/6 mb-6 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${product.color} 0%, transparent 70%)`,
                    }}
                  />
                  {product.id === "eyewear" ? (
                    <svg viewBox="0 0 320 160" className="w-72 h-32 animate-float drop-shadow-2xl" fill="none">
                      <line x1="115" y1="80" x2="205" y2="80" stroke={product.color} strokeWidth="3" strokeLinecap="round"/>
                      <rect x="20" y="48" width="95" height="64" rx="18" stroke={product.color} strokeWidth="2.5" fill={`${product.color}10`}/>
                      <rect x="205" y="48" width="95" height="64" rx="18" stroke={product.color} strokeWidth="2.5" fill={`${product.color}10`}/>
                      <line x1="20" y1="68" x2="2" y2="78" stroke={product.color} strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="300" y1="68" x2="318" y2="78" stroke={product.color} strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="67" cy="80" r="16" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" opacity="0.7"/>
                      <circle cx="253" cy="80" r="16" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" opacity="0.7"/>
                      <circle cx="67" cy="80" r="4" fill="#38bdf8"/>
                      <circle cx="253" cy="80" r="4" fill="#38bdf8"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 256 176" className="w-64 h-44 animate-float-delay drop-shadow-2xl" fill="none">
                      <rect x="68" y="20" width="120" height="136" rx="30" stroke={product.color} strokeWidth="2" fill={`${product.color}08`}/>
                      <line x1="68" y1="90" x2="188" y2="90" stroke={product.color} strokeWidth="1" opacity="0.4"/>
                      <circle cx="104" cy="122" r="20" stroke={product.color} strokeWidth="2" fill={`${product.color}15`}/>
                      <circle cx="152" cy="122" r="20" stroke={product.color} strokeWidth="2" fill={`${product.color}15`}/>
                      <circle cx="104" cy="122" r="11" fill={product.color} opacity="0.9"/>
                      <circle cx="104" cy="122" r="5" fill="white" opacity="0.95"/>
                      <circle cx="152" cy="122" r="11" fill={product.color} opacity="0.9"/>
                      <circle cx="152" cy="122" r="5" fill="white" opacity="0.95"/>
                      <circle cx="120" cy="148" r="4" fill={product.color} opacity="0.7"/>
                      <circle cx="128" cy="148" r="4" fill={product.color} opacity="0.4"/>
                      <circle cx="136" cy="148" r="4" fill={product.color} opacity="0.2"/>
                    </svg>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5" fill={product.color} stroke="none" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-syne)" }}>{product.rating}</span>
                  <span className="text-xs text-[#4a5568]" style={{ fontFamily: "var(--font-inter)" }}>({product.reviews.toLocaleString()} reviews)</span>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-xs text-[#94a3b8]" style={{ fontFamily: "var(--font-inter)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Specs row */}
                <div className="grid grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-[#0b1628] border border-white/6">
                  {product.specs.map((spec, j) => (
                    <div key={j} className="text-center">
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{spec.value}</div>
                      <div className="text-xs text-[#4a5568] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{spec.label}</div>
                    </div>
                  ))}
                </div>

                {/* Color variants */}
                <div className="mb-6">
                  <span className="text-xs text-[#4a5568] mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>Available in</span>
                  <div className="flex items-center gap-2">
                    {product.variants.map((variant, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-[#94a3b8] hover:border-white/20 hover:text-white cursor-pointer transition-all"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-3xl font-extrabold text-white"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {product.price}
                      </span>
                      <span className="text-sm line-through text-[#4a5568]">{product.originalPrice}</span>
                    </div>
                    <span className="text-xs text-emerald-400" style={{ fontFamily: "var(--font-inter)" }}>Free shipping • 30-day returns</span>
                  </div>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}cc 100%)`,
                      boxShadow: `0 4px 24px ${product.color}40`,
                    }}
                  >
                    Add to Cart
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#4f6ef7]/15 via-[#0f1e35] to-[#38bdf8]/15 p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                ✦ Bundle & Save
              </span>
              <h3 className="text-2xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-syne)" }}>
                Connex Complete — Vision One + Aura One
              </h3>
              <p className="text-[#94a3b8] text-sm mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                The full AI translation ecosystem. See it and hear it, simultaneously.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-right">
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne)" }}>$499</div>
                <div className="text-sm line-through text-[#4a5568]">$778</div>
                <div className="text-xs text-emerald-400">Save $279</div>
              </div>
              <button className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white">
                Get the Bundle
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
