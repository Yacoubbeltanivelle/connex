"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, total, count } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[400px] bg-white border-l border-[#e8e8ed] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e8ed]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4.5 h-4.5 text-[#1d1d1f]" strokeWidth={1.75} />
                <span className="font-semibold text-[#1d1d1f] text-base" style={{ fontFamily: "var(--font-syne)" }}>
                  Cart {count > 0 && <span className="text-[#6e6e73] font-normal">({count})</span>}
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-20">
                  <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#a1a1a6]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-[#1d1d1f] mb-1" style={{ fontFamily: "var(--font-syne)" }}>Your cart is empty</p>
                    <p className="body-sm text-[#6e6e73]">Add some products to get started.</p>
                  </div>
                  <button onClick={() => setOpen(false)} className="btn-link-dark text-sm">
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#f5f5f7] flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1d1d1f] text-sm font-semibold truncate" style={{ fontFamily: "var(--font-syne)" }}>
                        {item.name}
                      </p>
                      <p className="text-[#6e6e73] text-sm mt-0.5">${item.price}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-[#d2d2d7] rounded-full px-2.5 py-1">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-4 h-4 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[#1d1d1f] text-sm w-4 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-4 h-4 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#a1a1a6] hover:text-[#1d1d1f] text-xs transition-colors"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-[#e8e8ed] space-y-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="body-sm text-[#6e6e73]">Subtotal</span>
                  <span className="font-bold text-[#1d1d1f] text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                    ${total}
                  </span>
                </div>
                <p className="body-sm text-[#a1a1a6]">Taxes and shipping calculated at checkout</p>
                <Link href="/checkout" onClick={() => setOpen(false)} className="btn-dark w-full justify-center py-3.5">
                  Checkout — ${total}
                </Link>
                <Link href="/shop" onClick={() => setOpen(false)} className="btn-outline w-full justify-center py-3.5 text-sm">
                  Continue shopping
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
