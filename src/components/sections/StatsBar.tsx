"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Smile, Clock, Star } from "lucide-react";

const stats = [
  { icon: ShoppingBag, value: "500+", label: "Products" },
  { icon: Smile, value: "1000+", label: "Happy Customers" },
  { icon: Clock, value: "7 Days", label: "Open Weekly" },
  { icon: Star, value: "4.8", label: "Customer Rating" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
              <div className="text-3xl lg:text-4xl font-bold font-heading mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
