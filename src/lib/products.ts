export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  images: string[];
  features: { icon: string; title: string; desc: string }[];
  specs: { label: string; value: string }[];
  colors: string[];
};

export const products: Product[] = [
  {
    id: "vision-one",
    name: "Vision One",
    tagline: "See the world in any language.",
    description:
      "Vision One is the world's first AI-powered AR glasses with real-time translation. Powered by Connex NeuralCore, it translates 120 languages in under 300ms — displayed directly in your field of view.",
    price: 349,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "⚡", title: "0.3s latency", desc: "Real-time translation with NeuralCore AI" },
      { icon: "🌍", title: "120 languages", desc: "The world's largest translation model" },
      { icon: "👁", title: "AR display", desc: "Micro-OLED projection in your field of view" },
      { icon: "🔋", title: "18h battery", desc: "Full day of continuous translation" },
    ],
    specs: [
      { label: "Display", value: "Micro-OLED, 1200 nit" },
      { label: "Processor", value: "Connex NeuralCore 2" },
      { label: "Languages", value: "120+" },
      { label: "Latency", value: "<300ms" },
      { label: "Battery", value: "18 hours" },
      { label: "Weight", value: "34g" },
      { label: "Connectivity", value: "Bluetooth 5.3, Wi-Fi 6" },
      { label: "Water resistance", value: "IP54" },
    ],
    colors: ["#1d1d1f", "#f5f5f7", "#c8a882"],
  },
  {
    id: "aura-one",
    name: "Aura One",
    tagline: "Hear every word, flawlessly.",
    description:
      "Aura One are the world's most advanced AI translation earbuds. Completely invisible, they translate any conversation in real time — so you can understand and respond in any language, naturally.",
    price: 249,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "⚡", title: "0.2s latency", desc: "Faster than human speech processing" },
      { icon: "🎤", title: "6 microphones", desc: "Dual-mic array per ear for noise isolation" },
      { icon: "🔇", title: "ANC", desc: "Active noise cancellation + transparency mode" },
      { icon: "🔋", title: "32h battery", desc: "10h on device + 22h in charging case" },
    ],
    specs: [
      { label: "Driver", value: "11mm custom dynamic" },
      { label: "Processor", value: "Connex NeuralCore 2" },
      { label: "Languages", value: "120+" },
      { label: "Latency", value: "<200ms" },
      { label: "Battery", value: "10h + 22h case" },
      { label: "Weight", value: "5.4g per earbud" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Water resistance", value: "IPX4" },
    ],
    colors: ["#1d1d1f", "#f5f5f7"],
  },
  {
    id: "vision-one-pro",
    name: "Vision One Pro",
    tagline: "Extended range + wider FOV display.",
    description:
      "Vision One Pro takes AR translation further with a 40% wider field-of-view display, extended 24-hour battery, and our next-generation NeuralCore 3 processor. Built for power users and professionals.",
    price: 449,
    originalPrice: 499,
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "⚡", title: "0.2s latency", desc: "NeuralCore 3 — 40% faster than gen 2" },
      { icon: "🌍", title: "130 languages", desc: "Extended model with regional dialects" },
      { icon: "👁", title: "Wide FOV", desc: "40% wider AR display for immersive reading" },
      { icon: "🔋", title: "24h battery", desc: "Full day+ continuous translation" },
    ],
    specs: [
      { label: "Display", value: "Micro-OLED+, 1600 nit" },
      { label: "Processor", value: "Connex NeuralCore 3" },
      { label: "Languages", value: "130+" },
      { label: "Latency", value: "<200ms" },
      { label: "Battery", value: "24 hours" },
      { label: "Weight", value: "36g" },
      { label: "Connectivity", value: "Bluetooth 5.3, Wi-Fi 6E" },
      { label: "Water resistance", value: "IP55" },
    ],
    colors: ["#1d1d1f", "#c8a882"],
  },
  {
    id: "aura-lite",
    name: "Aura Lite",
    tagline: "Everyday translation earbuds. Lighter.",
    description:
      "Aura Lite brings real-time AI translation to everyday life in a smaller, lighter form factor. At 3.8g per earbud, you'll forget you're wearing them — while understanding everyone around you.",
    price: 179,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "⚡", title: "0.3s latency", desc: "Real-time translation, all-day comfort" },
      { icon: "🎤", title: "4 microphones", desc: "Dual-mic array per ear, focused pickup" },
      { icon: "🔇", title: "Transparency mode", desc: "Hear your surroundings naturally" },
      { icon: "🔋", title: "28h battery", desc: "8h on device + 20h in charging case" },
    ],
    specs: [
      { label: "Driver", value: "10mm custom dynamic" },
      { label: "Processor", value: "Connex NeuralCore 2 Lite" },
      { label: "Languages", value: "120+" },
      { label: "Latency", value: "<300ms" },
      { label: "Battery", value: "8h + 20h case" },
      { label: "Weight", value: "3.8g per earbud" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Water resistance", value: "IPX5" },
    ],
    colors: ["#1d1d1f", "#f5f5f7"],
  },
  {
    id: "connex-bundle",
    name: "Connex Bundle",
    tagline: "Vision One + Aura One. Save 15%.",
    description:
      "The complete Connex experience. Vision One AR glasses and Aura One earbuds together — see and hear in any language, simultaneously. Everything in the box, $99 off.",
    price: 499,
    originalPrice: 598,
    badge: "Best Value",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "👁", title: "Vision One included", desc: "AR display glasses — 120 languages" },
      { icon: "🎧", title: "Aura One included", desc: "AI translation earbuds — 32h battery" },
      { icon: "💰", title: "Save $99", desc: "15% off vs buying separately" },
      { icon: "📦", title: "Single box", desc: "Both devices, one seamless setup" },
    ],
    specs: [
      { label: "Includes", value: "Vision One + Aura One" },
      { label: "Languages", value: "120+" },
      { label: "Vision One battery", value: "18 hours" },
      { label: "Aura One battery", value: "10h + 22h case" },
      { label: "Combined weight", value: "39.4g" },
      { label: "Connectivity", value: "Bluetooth 5.3, Wi-Fi 6" },
      { label: "Warranty", value: "2 years (both devices)" },
      { label: "Savings", value: "$99 vs separate" },
    ],
    colors: ["#1d1d1f"],
  },
  {
    id: "carry-case",
    name: "Premium Carry Case",
    tagline: "Italian leather. Fits both devices.",
    description:
      "Hand-crafted from full-grain Italian leather, the Connex Carry Case protects both your Vision One and Aura One in a single slim case. Magnetic closure, microfibre interior.",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=76&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=76&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&q=76&auto=format&fit=crop",
    ],
    features: [
      { icon: "🪵", title: "Italian leather", desc: "Full-grain, waxed finish, ages beautifully" },
      { icon: "🔒", title: "Magnetic closure", desc: "Secure snap, opens one-handed" },
      { icon: "📐", title: "Slim profile", desc: "Fits both devices, still pocketable" },
      { icon: "✨", title: "Microfibre lining", desc: "Scratch-free interior for your lenses" },
    ],
    specs: [
      { label: "Material", value: "Full-grain Italian leather" },
      { label: "Interior", value: "Microfibre suede" },
      { label: "Closure", value: "Magnetic snap" },
      { label: "Fits", value: "Vision One + Aura One" },
      { label: "Dimensions", value: "18 × 9 × 4.5 cm" },
      { label: "Weight", value: "145g" },
      { label: "Colors", value: "Space Black, Starlight" },
      { label: "Origin", value: "Made in Italy" },
    ],
    colors: ["#1d1d1f", "#c8a882"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id) ?? null;
}
