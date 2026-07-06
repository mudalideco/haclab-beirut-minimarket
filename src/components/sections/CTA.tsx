"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Phone, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-green-800 text-white p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

          <div className="relative">
            <motion.div
              variants={childVariants}
              className="flex justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              >
                <ShoppingBag className="w-16 h-16 text-white/70 mx-auto mb-6" />
              </motion.div>
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4"
            >
              Ready to Shop?{" "}
              <span className="text-accent">Visit Us Today!</span>
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Stop by Beirut MiniMarket on Bulaimu Kibirige Road in Makindye.
              Fresh groceries, friendly service, and everything you need —
              every day.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="tel:+256782511111"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-50 px-6 py-3.5 rounded-xl text-base font-bold transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call +256 782 511 111
              </motion.a>
              <motion.a
                href="https://wa.me/256782511111"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 12px 30px rgba(234,179,8,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-yellow-400 px-6 py-3.5 rounded-xl text-base font-bold transition-all"
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
