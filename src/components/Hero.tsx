"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    label: "Vision One",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=320&q=72&auto=format&fit=crop",
  },
  {
    label: "Aura One",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=320&q=72&auto=format&fit=crop",
  },
  {
    label: "Bundles",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=320&q=72&auto=format&fit=crop",
  },
  {
    label: "Cases",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=320&q=72&auto=format&fit=crop",
  },
];

const confetti = [
  "left-[4%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#ff6b2c]",
  "left-[12%] top-[52%] h-1.5 w-9 rounded-full bg-[#ccff00] rotate-12",
  "right-[9%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#ccff00]",
  "right-[18%] top-[45%] h-2.5 w-9 rounded-full bg-[#ff7a00] -rotate-12",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7]">
      <div className="pointer-events-none absolute inset-0">
        {confetti.map((shape, index) => (
          <motion.span
            key={shape}
            className={`absolute ${shape}`}
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
              duration: 3.5 + index * 0.2,
              delay: index * 0.08,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-xl relative pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="flex flex-col gap-9">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start"
          >
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#ff5a1f] shadow-[0_8px_28px_rgba(12,10,9,0.08)]">
                <Sparkles className="h-4 w-4" />
                New Connex Store
              </p>
              <h1
                className="max-w-4xl text-[#111111]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(3.5rem, 7.2vw, 6.7rem)",
                  fontWeight: 700,
                  lineHeight: 0.92,
                }}
              >
                Tech that speaks every language.
              </h1>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_60px_rgba(12,10,9,0.08)] lg:mt-2">
              <p className="text-lg font-bold text-[#111111]">
                Gifts, upgrades and travel-ready AI wearables.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f6368]">
                Explore glasses, earbuds and bundles built for real-time
                translation, calls and daily movement.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/shop" className="btn-dark gap-2">
                  Shop Connex
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products/aura-one" className="btn-outline">
                  View Aura One
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="scroll-x-hide flex gap-5 pb-1">
            {categories.map((item, index) => (
              <motion.div
                key={item.label}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
                className="flex min-w-[112px] flex-col items-center gap-3"
              >
                <div className="relative h-22 w-22 overflow-hidden rounded-[24px] bg-white shadow-[0_10px_35px_rgba(12,10,9,0.09)]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <span className="text-sm font-semibold text-[#1d1d1f]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="relative min-h-[380px] overflow-hidden rounded-[32px] bg-[#ff6b2c] p-8 text-white shadow-[0_20px_70px_rgba(255,91,31,0.18)] md:min-h-[460px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/20" />
              <div className="relative z-10 max-w-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-white/75">
                  Vision One
                </p>
                <h2
                  className="text-4xl font-bold leading-[0.95] md:text-5xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  See live captions in the real world.
                </h2>
                <Link href="/products/vision-one" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111111]">
                  Learn more
                </Link>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&q=76&auto=format&fit=crop"
                alt="Vision One smart glasses"
                fill
                priority
                className="object-cover object-center opacity-70"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="relative min-h-[380px] overflow-hidden rounded-[32px] bg-[#ccff00] p-8 text-[#111111] shadow-[0_20px_70px_rgba(204,255,0,0.18)] md:min-h-[460px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-white/10 to-transparent" />
              <div className="relative z-10 max-w-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-black/55">
                  Aura One
                </p>
                <h2
                  className="text-4xl font-bold leading-[0.95] md:text-5xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Hear anyone. Answer naturally.
                </h2>
                <Link href="/products/aura-one" className="mt-6 inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-bold text-white">
                  Shop earbuds
                </Link>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&q=76&auto=format&fit=crop"
                alt="Aura One earbuds"
                fill
                className="object-cover object-center opacity-62 mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
