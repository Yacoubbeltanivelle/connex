import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import SmoothScroll from "@/components/SmoothScroll";

/* Sora -> display / logo / headings: technical, confident, readable. */
const sora = Sora({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

/* Manrope -> commerce UI/body: compact, polished, excellent for product grids. */
const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connex — AI Translation Wearables",
  description:
    "AI-powered eyewear and earwear. Understand anyone, anywhere, in real time. 120 languages. Under 300ms.",
  openGraph: {
    title: "Connex — AI Translation Wearables",
    description: "Break language barriers with AI-powered wearables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable}`}
    >
      <body className="bg-[#FAFAF9] text-[#0C0A09] antialiased overflow-x-hidden">
        <CartProvider>
          <SmoothScroll>
            {children}
            <CartDrawer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
