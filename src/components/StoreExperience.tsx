"use client";

import Link from "next/link";
import { ProductCarousel, type ProductCarouselItem } from "@/components/ui/product-carousel";
import { products } from "@/lib/products";

const accents = ["#f5f5f7", "#fff0f4", "#eaff8f", "#eef7ff", "#fff4df", "#efe7ff"];

const latestProducts: ProductCarouselItem[] = products.map((product, index) => ({
  id: product.id,
  name: product.name,
  eyebrow: product.badge ?? "Connex",
  price: product.price,
  originalPrice: product.originalPrice,
  discount: product.originalPrice ? "Save $" + (product.originalPrice - product.price) : undefined,
  deliveryTime: index < 2 ? "Ships tomorrow" : "Free delivery",
  imageUrl: product.image,
  href: `/products/${product.id}`,
  accent: accents[index % accents.length],
}));

const offerProducts: ProductCarouselItem[] = [
  latestProducts[4],
  latestProducts[0],
  latestProducts[1],
  latestProducts[5],
  latestProducts[3],
].filter(Boolean);

const promiseCards = [
  {
    title: "120 languages",
    body: "Translate live conversations in travel, work and daily life.",
    color: "bg-[#ccff00]",
  },
  {
    title: "Under 300ms",
    body: "Low-latency speech intelligence for natural replies.",
    color: "bg-[#ff6b2c] text-white",
  },
  {
    title: "30-day returns",
    body: "Try Connex at home, then decide with no pressure.",
    color: "bg-[#f2d7ff]",
  },
  {
    title: "2-year warranty",
    body: "Support, replacement guidance and care for every device.",
    color: "bg-[#dff3ff]",
  },
];

export default function StoreExperience() {
  return (
    <section className="bg-[#f5f5f7] py-8">
      <ProductCarousel
        title={
          <>
            <span className="text-[#ff5a1f]">The latest.</span>{" "}
            Take a look at what Connex can do now.
          </>
        }
        products={latestProducts}
      />

      <div className="container-xl py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {promiseCards.map((card) => (
            <div
              key={card.title}
              className={`${card.color} min-h-[144px] rounded-[20px] p-5 shadow-[0_10px_34px_rgba(12,10,9,0.07)]`}
            >
              <h3
                className="text-2xl font-black leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 opacity-75">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ProductCarousel
        title={
          <>
            <span className="text-[#7a3cff]">Bundles and offers.</span>{" "}
            Better gear, better value.
          </>
        }
        products={offerProducts}
        className="pt-4"
      />

      <div className="container-xl pb-14 pt-5">
        <div className="overflow-hidden rounded-[28px] bg-[#ccff00] p-7 md:grid md:grid-cols-[1fr_340px] md:items-center md:p-9">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-black/55">
              First Connex order
            </p>
            <h2
              className="mt-3 max-w-3xl text-4xl font-black leading-[0.95] text-[#111111] md:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              15% off your first wearable translation kit.
            </h2>
          </div>
          <div className="mt-8 rounded-[22px] bg-white p-5 shadow-[0_12px_35px_rgba(12,10,9,0.14)] md:mt-0">
            <p className="text-sm font-semibold text-[#5f6368]">
              Get early pricing on Vision One, Aura One and the Connex Bundle.
            </p>
            <Link
              href="/shop"
              className="mt-5 inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-bold text-white"
            >
              Shop early access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
