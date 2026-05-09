"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-[#1d1d1f] py-28 overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-caps text-[#6e6e73] mb-6">Early access</p>
            <h2 className="headline-xl text-white mb-5">
              Be the first<br />
              <span className="text-[#6e6e73]">to experience Connex.</span>
            </h2>
            <p className="body-copy text-[#6e6e73] max-w-sm">
              Join 12,000+ people on the waitlist. Get early access and exclusive pricing.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {!done ? (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="space-y-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-[#4d4d4f] text-sm focus:outline-none focus:border-white/25 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
                <button type="submit" className="btn-accent w-full justify-center gap-2 py-4 text-base">
                  Join the waitlist <ArrowRight className="w-4 h-4" />
                </button>
                <p className="body-sm text-[#4d4d4f] text-center">No spam. Unsubscribe anytime.</p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                  You&apos;re on the list!
                </p>
                <p className="body-sm text-[#6e6e73]">We&apos;ll be in touch with early access details.</p>
              </motion.div>
            )}

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.06]">
              {[
                { v: "12K+", l: "waitlist" },
                { v: "120",  l: "countries" },
                { v: "4.9★", l: "beta rating" },
                { v: "Q3 '25", l: "shipping" },
              ].map((x) => (
                <div key={x.l} className="text-center">
                  <div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.01em" }}>
                    {x.v}
                  </div>
                  <div className="label-caps text-[#4d4d4f]">{x.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
