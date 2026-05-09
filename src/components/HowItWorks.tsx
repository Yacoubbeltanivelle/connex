"use client";

import { motion } from "framer-motion";
import { Mic, Brain, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mic,
    color: "#4f6ef7",
    title: "Capture",
    description:
      "Connex microphones pick up ambient speech with surgical precision — filtering background noise and isolating voices with our SpeakerIQ™ technology.",
  },
  {
    number: "02",
    icon: Brain,
    color: "#818cf8",
    title: "Translate",
    description:
      "The Connex Neural Engine processes speech locally using our proprietary transformer model. Trained on 50+ languages, adapted to accents and dialects.",
  },
  {
    number: "03",
    icon: Headphones,
    color: "#38bdf8",
    title: "Deliver",
    description:
      "Translation appears as an AR overlay in your Eyewear or whispered through your Earwear — in under 300 milliseconds. Human speed. AI precision.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-[#0b1628] overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/6 to-transparent hidden lg:block" />

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
            How Connex works
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Three steps to{" "}
            <span className="gradient-text">zero barriers.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
              )}

              <div className="relative rounded-2xl border border-white/8 bg-[#0f1e35] p-8 group-hover:border-white/15 transition-all duration-300 overflow-hidden h-full">
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-5xl font-extrabold opacity-10 select-none"
                    style={{ color: step.color, fontFamily: "var(--font-syne)" }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}18` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#94a3b8] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {step.description}
                </p>

                {/* Progress bar */}
                <div className="mt-6 h-0.5 bg-white/6 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    className="h-full origin-left rounded-full"
                    style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Latency callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 p-8 rounded-3xl border border-white/10 bg-[#0f1e35]">
            <span className="text-xs font-semibold tracking-widest text-[#94a3b8] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              End-to-end latency
            </span>
            <span
              className="text-6xl font-extrabold gradient-text"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              &lt; 300ms
            </span>
            <span className="text-sm text-[#94a3b8]" style={{ fontFamily: "var(--font-inter)" }}>
              From speech to translated audio/display — faster than human processing delay.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
