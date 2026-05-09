"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const highlights = [
  "Whisper-clear in-ear translation",
  "120 languages — no phone required",
  "Active Noise Cancellation −40 dB",
  "32 hours total battery (8h + case)",
];

export default function ProductEarwear() {
  return (
    <section id="earwear" className="bg-[#f5f5f7] overflow-hidden">
      {/* Label bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-6">
        <div className="border-b border-[#d2d2d7] py-3 flex items-center justify-between">
          <span className="label-caps text-[#6e6e73]">Connex Earwear</span>
          <span className="label-caps text-[#6e6e73]">Aura One</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text — left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="label-caps text-[#0071e3] mb-5 block">Best Seller</span>
          <h2 className="headline-lg text-[#1d1d1f] mb-5">
            Hear every language
            <br />
            like your own.
          </h2>
          <p className="body-copy text-[#6e6e73] mb-8 max-w-sm">
            Aura One translates conversations directly in your ear in under 300ms.
            No screen, no phone — just crystal-clear understanding.
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="body-sm text-[#1d1d1f]">{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline gap-3 mb-8">
            <span className="headline-md text-[#1d1d1f]">$249</span>
            <span className="body-sm text-[#a1a1a6] line-through">$329</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/products/aura-one" className="btn-dark">
              Buy — $249
            </Link>
            <Link href="/products/aura-one" className="btn-link-dark">
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="body-sm text-[#a1a1a6] mt-4">
            Free shipping · 30-day returns · 2-year warranty
          </p>
        </motion.div>

        {/* Image — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden order-1 lg:order-2 shadow-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=76&auto=format&fit=crop"
            alt="Connex Aura One earwear"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
