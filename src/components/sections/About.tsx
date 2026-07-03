"use client";

import { motion } from "framer-motion";
import { Store, Heart, Users, ShoppingBag } from "lucide-react";

const stats = [
  { icon: Store, value: "3+", label: "Years Serving" },
  { icon: Heart, value: "1000+", label: "Happy Customers" },
  { icon: ShoppingBag, value: "500+", label: "Products Available" },
  { icon: Users, value: "24/7", label: "Community Focused" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — decorative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Store className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Serving Makindye
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Fresh. Friendly. Convenient.
                  </p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-primary/10" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-accent/10" />
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center p-3 rounded-xl bg-primary-50"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold font-heading text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
