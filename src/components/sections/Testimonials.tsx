"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Grace N.",
    text: "Beirut MiniMarket is my go-to for daily groceries. They always have fresh produce and the staff are incredibly friendly. Love shopping here!",
    rating: 5,
  },
  {
    name: "Peter K.",
    text: "Convenient location in Makindye, great prices, and they stock everything I need. Much better than going all the way to town.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "I appreciate the consistent quality and the welcoming atmosphere. It feels like a family-owned shop that truly cares about customers.",
    rating: 4,
  },
  {
    name: "David O.",
    text: "Best convenience store in Makindye! Open long hours which is perfect for my schedule. Highly recommend.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            What Our Customers{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We pride ourselves on the relationships we build with our customers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="font-semibold text-foreground font-heading text-sm">
                — {t.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
