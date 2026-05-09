"use client";

const stats = [
  { value: "50+", label: "Languages" },
  { value: "< 0.3s", label: "Translation latency" },
  { value: "32h", label: "Battery life" },
  { value: "98.7%", label: "Accuracy rate" },
  { value: "180g", label: "Ultralight" },
  { value: "IP54", label: "Water resistant" },
];

export default function StatsBar() {
  return (
    <section className="relative py-8 border-y border-white/6 bg-[#0b1628] overflow-hidden">
      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap pr-16">
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm text-[#4a5568]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
              <span className="text-[#1e3356] text-xl ml-8">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
