"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const lines = ["Your Health.", "Your Skin.", "Your Confidence."];

export function HeroText() {
  const reduce = useReducedMotion();
  const anim = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const } });
  return (
    <div>
      <motion.p {...anim(0)} className="eyebrow">Lilly Medical Aesthetics · by Dr N. Skhosana</motion.p>
      <h1 className="mt-6 text-[52px] leading-[0.98] sm:text-7xl xl:text-[84px]">
        {lines.map((l, i) => (
          <motion.span key={l} {...anim(0.1 + i * 0.12)} className={`block ${i === 2 ? "italic text-burgundy" : ""}`}>{l}</motion.span>
        ))}
      </h1>
      <motion.p {...anim(0.5)} className="mt-8 max-w-lg text-lg leading-8 text-ink/75">
        Personalised medical and aesthetic care designed to support your wellbeing, enhance skin health and help you feel confident in your own skin.
      </motion.p>
      <motion.div {...anim(0.65)} className="mt-10 flex flex-wrap gap-4">
        <Link href="/services" className="btn-primary">Explore Our Services <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/book" className="btn-outline">Book an Appointment</Link>
      </motion.div>
    </div>
  );
}
