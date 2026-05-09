"use client";

import { motion } from "framer-motion";
import { Mic2, Cpu, Headphones } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: <Mic2 className="w-6 h-6" strokeWidth={1.5} />,
    title: "Capture",
    body: "Dual-array microphones isolate speech from ambient noise using our proprietary SpeakerIQ™ signal processing — even in crowded environments.",
  },
  {
    n: "02",
    icon: <Cpu className="w-6 h-6" strokeWidth={1.5} />,
    title: "Translate",
    body: "The Connex Neural Engine processes speech on-device using a 2.4B-parameter transformer model. 120 languages. No cloud, no latency spikes.",
  },
  {
    n: "03",
    icon: <Headphones className="w-6 h-6" strokeWidth={1.5} />,
    title: "Deliver",
    body: "Translation appears as an AR overlay in Eyewear, or whispered through Earwear — in under 300 milliseconds. Human-speed. AI precision.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-[#1d1d1f] py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="label-caps text-[#6e6e73] mb-4">Technology</p>
          <h2 className="headline-lg text-white max-w-xl">
            Three steps.
            <br />
            <span className="text-[#6e6e73]">Zero barriers.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#1d1d1f] px-8 py-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl border border-white/[0.1] flex items-center justify-center text-[#6e6e73]">
                  {s.icon}
                </div>
                <span className="text-[#3d3d3f] text-sm font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
                  {s.n}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                {s.title}
              </h3>
              <p className="body-sm text-[#6e6e73] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Latency callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] bg-black/30 px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="label-caps text-[#6e6e73] mb-2">End-to-end latency</p>
            <p className="body-copy text-[#6e6e73] max-w-sm">
              From the moment someone speaks to the moment you understand —
              faster than the human brain processes the same input.
            </p>
          </div>
          <div className="text-center flex-shrink-0">
            <span
              className="block font-black text-white leading-none"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(3.5rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
            >
              &lt;300
            </span>
            <span className="label-caps text-[#6e6e73]">milliseconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
