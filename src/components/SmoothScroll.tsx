"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/* Native scroll — no Lenis overhead.
   Keeps GSAP ScrollTrigger in sync via passive scroll listener. */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onScroll = () => ScrollTrigger.update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>{children}</>;
}
