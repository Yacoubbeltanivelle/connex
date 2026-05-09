"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, MessageSquare, Building2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const topics = [
  { id: "product", label: "Product question" },
  { id: "order", label: "Order & shipping" },
  { id: "press", label: "Press & media" },
  { id: "partnership", label: "Partnership" },
  { id: "other", label: "Other" },
];

export default function ContactPage() {
  const [topic, setTopic] = useState("product");
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-[#F5F4F0] min-h-screen">
        {/* Header */}
        <div className="bg-[#FAFAF9] border-b border-[#E7E5E3] pt-24 pb-8">
          <div className="container-xl">
            <nav className="flex items-center gap-2 text-xs text-[#6e6e73] mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              <Link href="/" className="hover:text-[#1d1d1f] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#1d1d1f]">Contact</span>
            </nav>
            <h1 className="headline-lg text-[#1d1d1f]">Contact</h1>
            <p className="body-copy text-[#6e6e73] mt-3 max-w-lg">
              We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="container-xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Email support",
                  desc: "hello@connex.ai",
                  sub: "Mon–Fri, 9am–6pm CET",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Live chat",
                  desc: "Available in the app",
                  sub: "Response in under 2 min",
                },
                {
                  icon: <Building2 className="w-5 h-5" />,
                  title: "Headquarters",
                  desc: "Paris, France",
                  sub: "16 Rue de Rivoli, 75004",
                },
              ].map((c) => (
                <div key={c.title} className="surface-card p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1E8] flex items-center justify-center text-[#FF5A1F] mb-4">
                    {c.icon}
                  </div>
                  <p className="font-semibold text-[#1d1d1f] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                    {c.title}
                  </p>
                  <p className="body-sm text-[#1d1d1f]">{c.desc}</p>
                  <p className="body-sm text-[#6e6e73]">{c.sub}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 surface-card p-8 lg:p-10">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h2 className="headline-md text-[#1d1d1f]">Message sent!</h2>
                  <p className="body-copy text-[#6e6e73] max-w-sm">
                    We&apos;ll get back to you within 24 hours. Check your inbox for a confirmation.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-link mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-6"
                >
                  <div>
                    <p className="label-caps text-[#6e6e73] mb-3">Topic</p>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTopic(t.id)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            topic === t.id
                              ? "bg-[#0C0A09] text-white"
                              : "bg-[#F5F4F0] text-[#57534E] hover:bg-[#FFF1E8] hover:text-[#0C0A09]"
                          }`}
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-caps text-[#6e6e73] mb-2 block">First name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sophie"
                        className="field-control"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label className="label-caps text-[#6e6e73] mb-2 block">Last name</label>
                      <input
                        type="text"
                        required
                        placeholder="Laurent"
                        className="field-control"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-caps text-[#6e6e73] mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="sophie@example.com"
                      className="field-control"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  <div>
                    <label className="label-caps text-[#6e6e73] mb-2 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="field-control resize-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  <button type="submit" className="btn-dark w-full justify-center py-4 text-base">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
