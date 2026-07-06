"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ShoppingBag, Smile, Clock, Star } from "lucide-react";

const stats = [
  {
    icon: ShoppingBag,
    value: 500,
    suffix: "+",
    label: "Products Available",
    decimals: 0,
  },
  {
    icon: Smile,
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
    decimals: 0,
  },
  {
    icon: Clock,
    value: 7,
    suffix: "",
    label: "Days Open Weekly",
    displayText: "7 Days",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "",
    label: "Customer Rating",
    decimals: 1,
    prefix: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="py-16 bg-gradient-to-r from-primary via-primary-dark to-primary text-white relative overflow-hidden"
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={statItemVariants}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 8 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
              </motion.div>
              <div className="text-3xl lg:text-4xl font-bold font-heading mb-1">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    decimal="."
                    decimals={stat.decimals ?? 0}
                    duration={2.5 + i * 0.3}
                    separator=","
                    suffix={stat.suffix ?? ""}
                    prefix={stat.prefix ?? ""}
                  />
                ) : (
                  stat.displayText ?? "0"
                )}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
