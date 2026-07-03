"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Phone, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                <ShoppingBag className="w-4 h-4" />
                Your Neighborhood Store
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary">Beirut MiniMarket</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Your trusted neighborhood convenience store on Bulaimu Kibirige
                Road, Makindye. Fresh groceries, household essentials, and
                friendly service — every day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+256782511111"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call +256 782 511 111
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all"
              >
                <MapPin className="w-5 h-5" />
                Find Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                Open Daily: 7:00 AM – 9:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Makindye, Kampala
              </span>
            </motion.div>
          </div>

          {/* Right visual — product/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main decorative card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center -rotate-1">
                <ShoppingBag className="w-20 h-20 text-primary mb-4" />
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                  Fresh &amp; Convenient
                </h3>
                <p className="text-muted-foreground text-center max-w-xs">
                  Your one-stop shop for everyday essentials, fresh produce,
                  snacks, beverages, and household needs.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6 w-full">
                  {["Groceries", "Snacks", "Drinks", "Household", "Fresh", "Daily"].map(
                    (item) => (
                      <span
                        key={item}
                        className="text-xs font-medium bg-primary-50 text-primary px-3 py-2 rounded-lg text-center"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
