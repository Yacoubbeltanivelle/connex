import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cols: Record<string, { label: string; href: string }[]> = {
  Shop: [
    { label: "Vision One", href: "/products/vision-one" },
    { label: "Aura One", href: "/products/aura-one" },
    { label: "Complete Bundle", href: "/shop" },
    { label: "All products", href: "/shop" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Press Kit", href: "/contact" },
    { label: "Investors", href: "/contact" },
  ],
  Support: [
    { label: "Help Center", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Warranty", href: "/contact" },
    { label: "Community", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F5F4F0] border-t border-[#E7E5E3]">
      <div className="container-xl py-16">

        {/* Top — brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5 select-none" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="grid h-8 w-8 grid-cols-2 gap-0.5 rounded-lg bg-[#0C0A09] p-1 shadow-[0_10px_24px_rgba(12,10,9,0.14)]">
                <span className="rounded-[3px] bg-white" />
                <span className="rounded-[3px] bg-[#FF5A1F]" />
                <span className="rounded-[3px] bg-[#FF5A1F]" />
                <span className="rounded-[3px] bg-white" />
              </span>
              <span className="text-[22px] font-bold tracking-[0] leading-none text-[#0C0A09]">
                Connex
              </span>
            </Link>
            <p className="body-sm text-[#6e6e73] max-w-[180px] leading-relaxed mb-5">
              AI-powered translation wearables. The future speaks your language.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
              <span className="label-caps text-emerald-600">All systems operational</span>
            </div>
          </div>

          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <p className="label-caps text-[#1d1d1f] mb-4">{cat}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="body-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#d2d2d7] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="body-sm text-[#a1a1a6]">
            © {new Date().getFullYear()} Connex Technologies Inc. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 body-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            Made with care <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
