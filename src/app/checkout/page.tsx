"use client";

import { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Lock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

const steps = ["Cart", "Shipping", "Payment", "Confirm"];

function Field({ label, placeholder, type = "text", half = false }: {
  label: string; placeholder: string; type?: string; half?: boolean;
}) {
  return (
    <div className={half ? "col-span-1 sm:col-span-1" : "col-span-1 sm:col-span-2"}>
      <label className="label-caps text-[#6e6e73] mb-2 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="field-control"
        style={{ fontFamily: "var(--font-inter)" }}
      />
    </div>
  );
}

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const reactId = useId();
  const orderId = `CNX-${reactId.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().padEnd(6, "0").slice(0, 6)}`;
  const { items, total, clearCart } = useCart();

  const displayItems = items.length > 0 ? items : [
    { id: "vision-one", name: "Vision One", price: 349, quantity: 1, image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200&q=80&auto=format&fit=crop" },
  ];
  const displayTotal = items.length > 0 ? total : 349;

  if (done) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#F5F4F0] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="surface-card p-12 max-w-md w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h1 className="headline-md text-[#1d1d1f] mb-3">Order confirmed!</h1>
            <p className="body-copy text-[#6e6e73] mb-3">
              Thank you for your order. You&apos;ll receive a confirmation email shortly.
            </p>
            <p className="body-sm text-[#6e6e73] mb-10">
              Order #{orderId} · Estimated delivery: 3-5 business days
            </p>
            <Link href="/shop" className="btn-dark justify-center w-full">
              Continue shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#F5F4F0] min-h-screen pt-20">
        <div className="container-xl py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#6e6e73] mb-8" style={{ fontFamily: "var(--font-inter)" }}>
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-[#1d1d1f] transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1d1d1f]">Checkout</span>
          </nav>

          {/* Steps */}
          <div className="flex items-center gap-3 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 text-sm font-medium ${i + 1 === step ? "text-[#FF5A1F]" : i + 1 < step ? "text-[#0C0A09]" : "text-[#a1a1a6]"}`}
                  style={{ fontFamily: "var(--font-inter)" }}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    i + 1 < step ? "bg-[#CCFF00] text-[#0C0A09]" : i + 1 === step ? "bg-[#FF5A1F] text-white" : "bg-[#d2d2d7] text-[#6e6e73]"
                  }`}>
                    {i + 1 < step ? "✓" : i + 1}
                  </div>
                  <span className="hidden sm:inline">{s}</span>
                </div>
                {i < steps.length - 1 && <div className="w-8 h-px bg-[#d2d2d7] flex-shrink-0" />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="surface-card p-8 lg:p-10">
                {step === 1 && (
                  <div>
                    <h2 className="headline-md text-[#1d1d1f] mb-8">Contact & Shipping</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="First name" placeholder="Sophie" half />
                      <Field label="Last name" placeholder="Laurent" half />
                      <Field label="Email" placeholder="sophie@example.com" type="email" />
                      <Field label="Phone" placeholder="+33 6 12 34 56 78" type="tel" />
                      <Field label="Address" placeholder="16 Rue de Rivoli" />
                      <Field label="City" placeholder="Paris" half />
                      <Field label="Postal code" placeholder="75004" half />
                      <div className="col-span-1 sm:col-span-2">
                        <label className="label-caps text-[#6e6e73] mb-2 block">Country</label>
                        <select
                        className="field-control"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          <option>France</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Japan</option>
                        </select>
                      </div>
                    </div>
                    <button onClick={() => setStep(2)} className="btn-dark w-full justify-center mt-8 py-4 text-base">
                      Continue to payment
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="headline-md text-[#1d1d1f] mb-8">Payment</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Card number" placeholder="4242 4242 4242 4242" />
                      <Field label="Name on card" placeholder="Sophie Laurent" />
                      <Field label="Expiry" placeholder="MM / YY" half />
                      <Field label="CVV" placeholder="123" half />
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                      <Lock className="w-4 h-4 text-[#6e6e73]" />
                      <p className="body-sm text-[#6e6e73]">256-bit SSL encryption. Your data is safe.</p>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep(1)}
                        className="btn-ghost-dark flex-1 justify-center py-4"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => { clearCart(); setDone(true); }}
                        className="btn-dark flex-[2] justify-center py-4 text-base"
                      >
                        Place order — ${displayTotal}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order summary */}
            <div className="surface-card p-6 h-fit">
              <h3 className="font-semibold text-[#1d1d1f] mb-5" style={{ fontFamily: "var(--font-syne)" }}>
                Order summary
              </h3>
              <div className="space-y-4 mb-5">
                {displayItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#f5f5f7] flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1d1d1f]" style={{ fontFamily: "var(--font-syne)" }}>
                        {item.name}
                      </p>
                      <p className="body-sm text-[#6e6e73]">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-[#1d1d1f]">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="divider-light pt-5 space-y-3">
                <div className="flex justify-between body-sm text-[#6e6e73]">
                  <span>Subtotal</span>
                  <span>${displayTotal}</span>
                </div>
                <div className="flex justify-between body-sm text-[#6e6e73]">
                  <span>Shipping</span>
                  <span className="text-emerald-500">Free</span>
                </div>
                <div className="flex justify-between font-semibold text-[#1d1d1f]" style={{ fontFamily: "var(--font-syne)" }}>
                  <span>Total</span>
                  <span>${displayTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
