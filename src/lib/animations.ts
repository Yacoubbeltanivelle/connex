/**
 * Connex — Animation System
 * GSAP + ScrollTrigger patterns used across the site.
 * Import in "use client" components only.
 */

import { gsap } from "./gsap";

/* ─── Easing presets ────────────────────────────────────────────── */
export const ease = {
  premium: [0.16, 1, 0.3, 1] as [number, number, number, number],
  snappy:  [0.87, 0, 0.13, 1] as [number, number, number, number],
  smooth:  [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/* ─── Framer Motion variants ─────────────────────────────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: ease.premium },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: ease.premium },
  }),
};

export const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 16, opacity: 0 },
  visible: (i = 0) => ({
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.08, ease: ease.premium },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ─── GSAP ScrollTrigger helpers ────────────────────────────────── */

/**
 * Fade + slide up elements on scroll.
 * @param selector  CSS selector scoped to `scope` element
 * @param scope     Container element ref (useGSAP scope)
 * @param options   Overrides for gsap.from()
 */
export function revealOnScroll(
  selector: string,
  scope: Element | null,
  options?: gsap.TweenVars
) {
  if (!scope) return;
  return gsap.from(selector, {
    y: 36,
    opacity: 0,
    duration: 0.75,
    stagger: 0.09,
    ease: "power2.out",
    scrollTrigger: {
      trigger: scope,
      start: "top 86%",
    },
    ...options,
  });
}

/**
 * Clip-path reveal — editorial text reveal effect.
 */
export function clipRevealOnScroll(
  selector: string,
  scope: Element | null,
  options?: gsap.TweenVars
) {
  if (!scope) return;
  return gsap.from(selector, {
    clipPath: "inset(110% 0 0 0)",
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: scope,
      start: "top 88%",
    },
    ...options,
  });
}

/**
 * Parallax Y — subtle depth effect.
 * Use on hero images or background elements.
 */
export function parallaxY(
  selector: string,
  scope: Element | null,
  yPercent = -20
) {
  if (!scope) return;
  return gsap.to(selector, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: scope,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/**
 * Horizontal marquee — for logos / trust badges.
 * Returns cleanup fn.
 */
export function infiniteMarquee(wrapperSelector: string, speed = 1) {
  const ctx = gsap.context(() => {
    const wrapper = document.querySelector<HTMLElement>(wrapperSelector);
    if (!wrapper) return;
    const totalWidth = wrapper.scrollWidth / 2;
    gsap.to(wrapper, {
      x: -totalWidth,
      duration: totalWidth / (60 * speed),
      ease: "none",
      repeat: -1,
    });
  });
  return () => ctx.revert();
}

/**
 * Magnetic button — attach to a button container.
 * Returns detach function.
 */
export function magneticHover(el: HTMLElement, strength = 0.3) {
  const onMove = (e: MouseEvent) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
  };
  const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "back.out(2)" });
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/**
 * Number count-up — for stat counters.
 */
export function countUp(
  el: HTMLElement,
  to: number,
  duration = 1.5,
  prefix = "",
  suffix = ""
) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: to,
    duration,
    ease: "power2.out",
    onUpdate() {
      el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix;
    },
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
      once: true,
    },
  });
}

/* ─── Scroll progress indicator ─────────────────────────────────── */
export function scrollProgress(barSelector: string) {
  return gsap.to(barSelector, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}
