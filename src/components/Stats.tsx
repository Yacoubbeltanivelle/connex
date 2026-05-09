"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "<300ms", label: "Translation latency", sub: "Faster than human perception" },
  { value: "120+",   label: "Languages supported", sub: "Every major world language" },
  { value: "98.7%",  label: "Accuracy rate",       sub: "Tested across 50,000 users" },
  { value: "32h",    label: "Total battery life",   sub: "Vision One + Aura One combined" },
];

export default function Stats() {
  return (
    <section className="bg-white border-y border-[#e8e8ed] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="label-caps text-[#6e6e73] mb-4">By the numbers</p>
          <h2 className="headline-lg text-[#1d1d1f]">
            Built for a world
            <br />
            <span className="text-[#a1a1a6]">without limits.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e8ed] rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white px-8 py-10 text-center"
            >
              <div className="stat-number text-[#1d1d1f] mb-2">{s.value}</div>
              <div className="text-sm font-semibold text-[#1d1d1f] mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                {s.label}
              </div>
              <div className="body-sm text-[#a1a1a6]">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
