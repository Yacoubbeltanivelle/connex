import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "About — Connex" };

const team = [
  {
    name: "Sarah Chen",
    role: "Co-founder & CEO",
    bio: "Former Apple VP of Product. 15 years building products that change how humans communicate.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Marcus Osei",
    role: "Co-founder & CTO",
    bio: "Ex-Google Brain researcher. Built NeuralCore, the AI model powering real-time translation.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Léa Dubois",
    role: "Head of Design",
    bio: "Former Braun and LVMH. Crafts wearable hardware with obsessive attention to detail.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of AI",
    bio: "Built the translation stack at NTT and DeepMind. 120 languages, 0.3s — that's his work.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&auto=format&fit=crop",
  },
];

const milestones = [
  { year: "2021", title: "Founded in Paris", desc: "Two engineers, one idea: break every language barrier on Earth." },
  { year: "2022", title: "NeuralCore v1", desc: "First AI model achieving sub-500ms translation latency for 80 languages." },
  { year: "2023", title: "Series A — $28M", desc: "Backed by a16z, Sequoia Europe, and Founders Fund." },
  { year: "2024", title: "Beta launch", desc: "50,000 beta users across 120 countries. 4.9★ rating." },
  { year: "2025", title: "Shipping to the world", desc: "Vision One and Aura One available globally. Q3 2025." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1C1917] pt-28 pb-24 overflow-hidden">
          <div className="container-xl">
            <nav className="flex items-center gap-2 text-xs text-[#6e6e73] mb-12" style={{ fontFamily: "var(--font-inter)" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#a1a1a6]">About</span>
            </nav>
            <p className="label-caps text-[#FF5A1F] mb-6">Our story</p>
            <h1 className="headline-xl text-white max-w-3xl mb-8">
              We&apos;re building a world without language barriers.
            </h1>
            <p className="body-copy text-[#a1a1a6] max-w-xl">
              Connex was born from a simple belief: no one should feel lost because they speak a different language.
              We combine cutting-edge AI with precision hardware to make real-time translation invisible — and universal.
            </p>
          </div>
        </section>

        {/* Brand system visual */}
        <section className="bg-[#1C1917] pb-14">
          <div className="container-xl">
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0C0A09] p-8 shadow-[0_28px_90px_rgba(12,10,9,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(255,90,31,0.38),transparent_28%),radial-gradient(circle_at_82%_40%,rgba(204,255,0,0.34),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-white/10" />
              <div className="absolute right-16 bottom-12 h-36 w-36 rounded-full bg-[#CCFF00]/70 blur-3xl" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
                <div className="max-w-md">
                  <p className="label-caps text-[#CCFF00] mb-4">Connex NeuralCore</p>
                  <h2 className="headline-lg text-white">
                    Real-time language,
                    <span className="block text-white/45">designed to disappear.</span>
                  </h2>
                </div>
                <div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    ["120+", "languages"],
                    ["<300ms", "latency"],
                    ["32h", "battery target"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
                      <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-syne)" }}>{value}</p>
                      <p className="label-caps mt-2 text-white/55">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#F5F4F0] py-24">
          <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-caps text-[#6e6e73] mb-5">Our mission</p>
              <h2 className="headline-lg text-[#1d1d1f] mb-6">
                Language is a bridge,<br />
                <span className="text-[#6e6e73]">not a wall.</span>
              </h2>
              <p className="body-copy text-[#6e6e73] mb-5">
                Every day, billions of conversations fail because of language. Business deals fall apart. Families drift.
                Travelers feel isolated. Medical consultations become dangerous.
              </p>
              <p className="body-copy text-[#6e6e73]">
                We built Connex to change that — not with a phone, not with a translator, but with intelligent wearables
                that disappear into your life and let you connect with anyone, anywhere, in any language.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "120+", l: "Languages supported" },
                { v: "50K+", l: "Beta users" },
                { v: "4.9★", l: "Average rating" },
                { v: "$28M", l: "Series A raised" },
              ].map((s) => (
                <div key={s.l} className="surface-card p-6">
                  <p className="text-4xl font-bold text-[#1d1d1f] mb-1" style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.02em" }}>
                    {s.v}
                  </p>
                  <p className="body-sm text-[#6e6e73]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-24">
          <div className="container-xl">
            <p className="label-caps text-[#6e6e73] mb-5">Timeline</p>
            <h2 className="headline-lg text-[#1d1d1f] mb-16">How we got here.</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-8 lg:gap-16 ${i < milestones.length - 1 ? "pb-12" : ""}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#FF5A1F] flex items-center justify-center flex-shrink-0 shadow-[0_10px_24px_rgba(255,90,31,0.22)]">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    {i < milestones.length - 1 && <div className="flex-1 w-px bg-[#d2d2d7] mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="label-caps text-[#FF5A1F] mb-1">{m.year}</p>
                    <p className="text-lg font-semibold text-[#1d1d1f] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      {m.title}
                    </p>
                    <p className="body-copy text-[#6e6e73]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#F5F4F0] py-24">
          <div className="container-xl">
            <p className="label-caps text-[#6e6e73] mb-5">The team</p>
            <h2 className="headline-lg text-[#1d1d1f] mb-14">Built by obsessives.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="surface-card overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-[#1d1d1f] mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                      {member.name}
                    </p>
                    <p className="label-caps text-[#FF5A1F] mb-3">{member.role}</p>
                    <p className="body-sm text-[#6e6e73]">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C1917] py-20 px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="label-caps text-[#A8A29E] mb-5">Join us</p>
            <h2 className="headline-lg text-white mb-5">We&apos;re hiring.</h2>
            <p className="body-copy text-[#a1a1a6] mb-10">
              We&apos;re looking for people who care deeply about the problem and want to build the future of human communication.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-accent">
                View open roles
              </Link>
              <Link href="/contact" className="btn-ghost-white">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
