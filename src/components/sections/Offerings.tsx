"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShoppingBasket,
  Coffee,
  Milk,
  Home,
  Candy,
  SprayCan as Can,
  Croissant,
  Apple,
  Wine,
  Phone,
  Timer,
  Gift,
  RefreshCw,
} from "lucide-react";

const combinedItems = [
  // Product categories (6)
  {
    icon: ShoppingBasket,
    name: "Fresh Produce",
    items: "Fruits, vegetables, greens & herbs",
    type: "product",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Milk,
    name: "Dairy & Eggs",
    items: "Milk, yoghurt, cheese, butter & eggs",
    type: "product",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Croissant,
    name: "Bakery & Bread",
    items: "Fresh bread, chapati, pastries & cakes",
    type: "product",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Coffee,
    name: "Beverages",
    items: "Sodas, juices, water, coffee & energy drinks",
    type: "product",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Can,
    name: "Canned & Packaged",
    items: "Tinned food, sauces, oils & condiments",
    type: "product",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Home,
    name: "Household Supplies",
    items: "Cleaning, toiletries, detergents & more",
    type: "product",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Candy,
    name: "Snacks & Treats",
    items: "Crisps, biscuits, chocolates & sweets",
    type: "product",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Apple,
    name: "Cooking Essentials",
    items: "Rice, flour, sugar, salt, oil & spices",
    type: "product",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Wine,
    name: "Drinks & Mixers",
    items: "Sodas, beer, spirits & party essentials",
    type: "product",
    color: "bg-rose-50 text-rose-600",
  },
  // Service offerings (4)
  {
    icon: Phone,
    name: "Phone Orders & Pickup",
    items: "Call ahead, we will have it ready — fast & easy",
    type: "service",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Timer,
    name: "Extended Hours Daily",
    items: "Open 7 AM – 9 PM every day, including weekends",
    type: "service",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Gift,
    name: "Bulk & Wholesale",
    items: "Wholesale pricing for businesses, events & parties",
    type: "service",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: RefreshCw,
    name: "Fresh Stock Daily",
    items: "We restock every morning — always fresh, always ready",
    type: "service",
    color: "bg-lime-50 text-lime-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Offerings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.6, 0.3]);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Decorative background blobs with parallax */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/5 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Everything We Offer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            What You Will Find at{" "}
            <span className="text-primary">Beirut MiniMarket</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From farm-fresh produce to phone-order pickup — over 500 products
            and services designed to make your day easier.
          </p>
        </motion.div>

        {/* Unified grid — 13 items across product + service types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {combinedItems.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(22, 163, 74, 0.12)",
              }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm transition-all group cursor-default relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                  item.type === "service"
                    ? "bg-gradient-to-r from-teal-400 to-cyan-400"
                    : "bg-gradient-to-r from-primary to-primary-light"
                }`}
              />

              <div
                className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3 mt-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-heading text-foreground mb-1 leading-tight">
                {item.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                {item.items}
              </p>
              {item.type === "service" && (
                <span className="inline-block mt-2 text-[10px] font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                  Service
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground">
            Need something specific?{" "}
            <a
              href="tel:+256782511111"
              className="text-primary font-semibold hover:underline"
            >
              Give us a call
            </a>{" "}
            and we will help you out!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
