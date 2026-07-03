"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-white/70" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Ready to Shop?{" "}
              <span className="text-accent">Visit Us Today!</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Stop by Beirut MiniMarket on Bulaimu Kibirige Road in Makindye.
              Fresh groceries, friendly service, and everything you need —
              every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+256782511111"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-50 px-6 py-3.5 rounded-xl text-base font-bold transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call +256 782 511 111
              </a>
              <a
                href="https://wa.me/256782511111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-yellow-400 px-6 py-3.5 rounded-xl text-base font-bold transition-all"
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
