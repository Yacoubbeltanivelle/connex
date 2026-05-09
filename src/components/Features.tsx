"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Heart, Cpu, Volume2, Eye } from "lucide-react";

const features = [
  {
    icon: Zap,
    color: "#4f6ef7",
    title: "Real-Time AI Translation",
    description:
      "Instantly understand conversations across 50+ languages with sub-300ms latency. Our neural translation engine runs on-device — no internet required.",
    stat: "< 0.3s",
    statLabel: "Response time",
  },
  {
    icon: Eye,
    color: "#38bdf8",
    title: "Seamless AR Display",
    description:
      "Connex Eyewear projects translated text as a subtle overlay in your field of vision. See the world and the translation at the same time.",
    stat: "1080p",
    statLabel: "Display clarity",
  },
  {
    icon: Volume2,
    color: "#818cf8",
    title: "Whisper-Clear Audio",
    description:
      "Connex Earwear delivers translated speech in your ear with studio-grade clarity. Active noise cancellation ensures every word is heard.",
    stat: "-40dB",
    statLabel: "Noise reduction",
  },
  {
    icon: Shield,
    color: "#34d399",
    title: "Privacy First",
    description:
      "All translation happens on-device. Your conversations never leave your device — encrypted, private, yours forever.",
    stat: "Zero",
    statLabel: "Data sent to cloud",
  },
  {
    icon: Heart,
    color: "#f472b6",
    title: "Built for Everyday",
    description:
      "Designed to look and feel like premium eyewear and earbuds. No one will know you're wearing AI — unless you tell them.",
    stat: "180g",
    statLabel: "Ultralight frame",
  },
  {
    icon: Cpu,
    color: "#fb923c",
    title: "Connex Neural Engine",
    description:
      "Our proprietary AI chip delivers laptop-grade processing power in a wearable form factor. Learns your accent and preferences over time.",
    stat: "4 TOPS",
    statLabel: "AI performance",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative py-28 bg-[#0b1628] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-widest text-[#4f6ef7] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            What makes Connex different
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Technology that{" "}
            <span className="gradient-text">disappears.</span>
          </h2>
          <p
            className="text-[#94a3b8] text-lg mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We obsessed over every detail so you can focus on what matters —
            the conversation.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/8 bg-[#0f1e35] p-7 hover:border-white/15 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top left, ${feature.color}15 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${feature.color}18` }}
              >
                <feature.icon
                  className="w-5 h-5"
                  style={{ color: feature.color }}
                />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 20px ${feature.color}`,
                  }}
                />
              </div>

              {/* Content */}
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-[#94a3b8] leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-white/6">
                <span
                  className="text-2xl font-bold"
                  style={{ color: feature.color, fontFamily: "var(--font-syne)" }}
                >
                  {feature.stat}
                </span>
                <span
                  className="text-xs text-[#4a5568]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {feature.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
