"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "TechCrunch", color: "#22c55e" },
  { name: "Wired", color: "#f0f4ff" },
  { name: "The Verge", color: "#a855f7" },
  { name: "Forbes", color: "#f59e0b" },
  { name: "Fast Company", color: "#ef4444" },
  { name: "Product Hunt", color: "#f97316" },
];

const quotes = [
  { source: "Wired", text: "\"The most impressive AI wearable we&apos;ve tested. Connex doesn&apos;t just work — it&apos;s magical.\"" },
  { source: "TechCrunch", text: "\"Connex could make professional interpreters obsolete within a decade.\"" },
  { source: "Forbes", text: "\"A $1B opportunity hiding in plain sight. Connex is executing perfectly.\"" },
];

export default function Press() {
  return (
    <section className="relative py-20 bg-[#0b1628] overflow-hidden border-y border-white/5">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest text-[#4a5568] uppercase mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          As seen in
        </motion.p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-16">
          {logos.map((logo, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-xl font-extrabold opacity-25 hover:opacity-70 transition-opacity duration-300 cursor-default select-none"
              style={{ color: logo.color, fontFamily: "var(--font-syne)" }}
            >
              {logo.name}
            </motion.span>
          ))}
        </div>

        {/* Press quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/6 bg-[#0f1e35] p-6"
            >
              <p
                className="text-sm text-[#94a3b8] leading-relaxed mb-4 italic"
                style={{ fontFamily: "var(--font-inter)" }}
                dangerouslySetInnerHTML={{ __html: q.text }}
              />
              <span className="text-xs font-bold text-[#4f6ef7]" style={{ fontFamily: "var(--font-inter)" }}>
                — {q.source}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
