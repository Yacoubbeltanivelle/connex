"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const highlights = [
  "Real-time AR translation overlay",
  "120 languages, on-device AI",
  "18-hour battery — all-day wear",
  "Prescription lens compatible",
];

export default function ProductEyewear() {
  return (
    <section id="eyewear" className="bg-white overflow-hidden">
      {/* Label bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-6">
        <div className="border-b border-[#d2d2d7] py-3 flex items-center justify-between">
          <span className="label-caps text-[#6e6e73]">Connex Eyewear</span>
          <span className="label-caps text-[#6e6e73]">Vision One</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image — left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop"
            alt="Connex Vision One eyewear"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-caps text-[#0071e3] mb-5 block">New</span>
          <h2 className="headline-lg text-[#1d1d1f] mb-5">
            See the world.
            <br />
            In your language.
          </h2>
          <p className="body-copy text-[#6e6e73] mb-8 max-w-sm">
            Vision One projects real-time AI translations as a subtle overlay
            in your field of view. Lightweight titanium frames, 18-hour battery,
            no internet required.
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
            <span className="headline-md text-[#1d1d1f]">$349</span>
            <span className="body-sm text-[#a1a1a6] line-through">$449</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/products/vision-one" className="btn-dark">
              Buy — $349
            </Link>
            <Link href="/products/vision-one" className="btn-link-dark">
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="body-sm text-[#a1a1a6] mt-4">
            Free shipping · 30-day returns · 2-year warranty
          </p>
        </motion.div>
      </div>
    </section>
  );
}
