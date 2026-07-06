"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { Store, Heart, Users, ShoppingBag } from "lucide-react";

const stats: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  display?: string;
}[] = [
  { icon: Store, value: 3, suffix: "+", label: "Years Serving", decimals: 0 },
  { icon: Heart, value: 1000, suffix: "+", label: "Happy Customers", decimals: 0 },
  { icon: ShoppingBag, value: 500, suffix: "+", label: "Products Available", decimals: 0 },
  { icon: Users, value: 7, suffix: "", label: "Days a Week", decimals: 0, display: "7 Days" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — decorative with real image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&h=450&fit=crop"
                alt="Beirut MiniMarket — your neighborhood store in Makindye"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Typographic moment — oversized number overlay */}
              <div className="absolute bottom-4 left-4">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="block text-7xl sm:text-8xl font-bold font-heading text-white/90 leading-none"
                  >
                    3+
                  </motion.span>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-white/70 text-sm mt-1 font-medium"
                >
                  Years serving Makindye community
                </motion.p>
              </div>
            </div>
            {/* Floating decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 -z-10" />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
              Your Trusted Neighborhood Store in{" "}
              <span className="text-primary">Makindye</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beirut MiniMarket is a family-owned convenience store located on
              Bulaimu Kibirige Road in the heart of Makindye, Kampala. We are
              dedicated to providing our community with fresh groceries, quality
              household essentials, snacks, beverages, and everyday necessities
              at affordable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets us apart is our commitment to friendly, personalized
              service. We know our customers by name, stock what the community
              needs, and take pride in being more than just a shop — we are a
              neighborhood gathering place.
            </p>

            {/* Animated stats with CountUp */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="text-center p-3 rounded-xl bg-primary-50 transition-all"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold font-heading text-foreground">
                    <CountUp
                      end={stat.value}
                      separator=","
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      displayText={stat.display}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
