"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "I negotiate contracts in 4 languages every week. Connex changed everything — I understand every nuance without an interpreter.",
    name: "Sophie Laurent",
    role: "International Lawyer, Paris",
    rating: 5,
  },
  {
    quote: "Traveled 12 countries in 3 months with Aura One. I never felt lost. I connected with people I never could have before.",
    name: "Kenji Tanaka",
    role: "Travel Photographer, Tokyo",
    rating: 5,
  },
  {
    quote: "The accuracy is incredible — even with medical terminology across languages. The first AI ready for professional use.",
    name: "Maria Dos Santos",
    role: "Medical Researcher, São Paulo",
    rating: 5,
  },
  {
    quote: "Closed a deal in Mandarin last week — me, speaking no Mandarin. Aura One translated everything, real-time, flawlessly.",
    name: "James Okafor",
    role: "Startup Founder, Lagos",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 overflow-hidden border-t border-[#E7E5E3]">
      <div className="container-xl">

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="label-caps text-[#6e6e73] mb-4">What people say</p>
            <h2 className="headline-lg text-[#1d1d1f]">
              50,000 users.
              <br />
              <span className="text-[#a1a1a6]">120 countries.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF5A1F] text-[#FF5A1F]" />
            ))}
            <span className="ml-2 text-sm font-semibold text-[#1d1d1f]">4.9</span>
            <span className="body-sm text-[#6e6e73]">average rating</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#F5F4F0] rounded-2xl border border-[#E7E5E3] p-8 hover:bg-white hover:shadow-[0_18px_55px_rgba(12,10,9,0.06)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#FF5A1F] text-[#FF5A1F]" />
                ))}
              </div>
              <p className="text-[#1d1d1f] text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="border-t border-[#d2d2d7] pt-5">
                <p className="text-sm font-semibold text-[#1d1d1f]" style={{ fontFamily: "var(--font-syne)" }}>
                  {r.name}
                </p>
                <p className="body-sm text-[#6e6e73]">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
