import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "120", unit: "+", label: "Languages" },
  { value: "<300", unit: "ms", label: "Latency" },
  { value: "32", unit: "h", label: "Battery" },
  { value: "IPX4", unit: "", label: "Water resist." },
];

export default function EditorialBand() {
  return (
    <section id="technology" className="bg-[#1C1917] section-pad-lg overflow-hidden">
      <div className="container-xl">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Label */}
          <p className="label-caps text-[#A8A29E]">The technology</p>

          {/* Giant headline */}
          <div className="eb-headline overflow-hidden">
            <h2
              className="text-[#FAFAF9] leading-[0.92]"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
              }}
            >
              Built for every
              <br />
              <em className="italic text-[#A8A29E]">conversation.</em>
            </h2>
          </div>

          {/* Sub */}
          <p
            className="text-[#78716C] max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem" }}
          >
            Connex NeuralCore translates in real time — faster than you can blink,
            across 120 languages, with zero compromise on sound quality.
          </p>

          {/* Stats grid */}
          <div className="eb-stats grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#292524] rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="eb-stat bg-[#1C1917] px-6 py-8 text-center"
              >
                <p
                  className="text-[#FAFAF9]"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                  <span
                    className="text-[#CA8A04]"
                    style={{ fontSize: "0.6em" }}
                  >
                    {s.unit}
                  </span>
                </p>
                <p className="label-caps text-[#57534E] mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="eb-cta flex flex-wrap items-center justify-center gap-4">
            <Link href="/products/vision-one" className="btn-ghost-white">
              Shop Vision One
              <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.75} />
            </Link>
            <Link href="/products/aura-one" className="btn-ghost-white">
              Shop Aura One
              <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
