"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "The language barrier costs $49B/year",
    body: "In business, travel, healthcare, and education — miscommunication between languages is a massive, unsolved problem. We built Connex to end it.",
  },
  {
    num: "02",
    title: "AI that works offline, always",
    body: "We believe your translator shouldn't need a data connection. Connex's on-device neural engine means it works on a plane at 35,000 feet, in a remote village, anywhere.",
  },
  {
    num: "03",
    title: "Wearables, not phones",
    body: "Every competitor is building a phone app. We believe the future is ambient — technology that disappears into your daily life, not another screen to stare at.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#080f1d] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-100" />
      <div
        className="absolute right-0 top-0 w-[500px] h-[600px] opacity-10"
        style={{ background: "radial-gradient(ellipse at top right, #4f6ef7 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-widest text-[#4f6ef7] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              Our mission
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-7 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              We&apos;re building a world{" "}
              <span className="gradient-text">without language barriers.</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Connex was founded in 2023 by a team of AI researchers and product designers
              who believed that real-time translation shouldn&apos;t require you to
              pull out your phone, break the flow of conversation, or trust a cloud server
              with your private discussions.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              We built the hardware and the AI from scratch. Our proprietary
              Connex Neural Engine runs entirely on-device — no internet, no cloud,
              no compromise. Just conversation, translated at the speed of thought.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f6ef7] hover:text-[#38bdf8] transition-colors duration-200 link-underline"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Read our full story <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="glass-card rounded-2xl p-6 group hover:border-white/14"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-3xl font-extrabold opacity-20 flex-shrink-0 select-none"
                    style={{ color: "#4f6ef7", fontFamily: "var(--font-syne)" }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Team stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              {[
                { v: "2023", l: "Founded" },
                { v: "47", l: "Team members" },
                { v: "Paris & SF", l: "Headquarters" },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl border border-white/6 bg-white/3">
                  <div className="text-xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-syne)" }}>{s.v}</div>
                  <div className="text-xs text-[#4a5568] mt-1" style={{ fontFamily: "var(--font-inter)" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
