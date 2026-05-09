"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";

export default function Bundle() {
  return (
    <section className="bg-[#f5f5f7] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="label-caps text-[#6e6e73] mb-4">Bundle offer</p>
          <h2 className="headline-lg text-[#1d1d1f]">
            The complete
            <br />
            <span className="text-[#a1a1a6]">Connex ecosystem.</span>
          </h2>
          <p className="body-copy text-[#6e6e73] max-w-md mt-4">
            Vision One + Aura One — see it and hear it simultaneously.
            The full AI translation experience.
          </p>
        </motion.div>

        {/* Product images */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {[
            { src: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=700&q=72&auto=format&fit=crop", name: "Vision One", price: "$349" },
            { src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&q=72&auto=format&fit=crop", name: "Aura One", price: "$249" },
          ].map((p) => (
            <div key={p.name} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image src={p.src} alt={p.name} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="label-caps text-white/70">{p.name}</p>
                <p className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bundle price card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-[#e8e8ed] px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2} />
              <p className="label-caps text-emerald-600">Best value — Save $279</p>
            </div>
            <p className="label-caps text-[#6e6e73] mb-1">Connex Complete</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-[#1d1d1f]" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.025em" }}>
                $499
              </span>
              <span className="body-sm text-[#a1a1a6] line-through">$778</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/checkout?bundle=true" className="btn-dark">
              Buy bundle
            </Link>
            <Link href="/shop" className="btn-link-dark">
              Compare <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
