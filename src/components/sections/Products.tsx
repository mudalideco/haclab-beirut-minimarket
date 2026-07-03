"use client";

import { motion } from "framer-motion";
import {
  ShoppingBasket,
  Coffee,
  Milk,
  Home,
  Candy,
  SprayCan as Can,
  Croissant,
  Egg,
} from "lucide-react";

const categories = [
  {
    icon: ShoppingBasket,
    name: "Fresh Produce",
    items: "Fruits, vegetables & greens",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Milk,
    name: "Dairy & Eggs",
    items: "Milk, yoghurt, cheese, eggs",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Croissant,
    name: "Bakery",
    items: "Bread, chapati, pastries",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Coffee,
    name: "Beverages",
    items: "Sodas, juices, water, coffee",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Can,
    name: "Canned Goods",
    items: "Tinned food, sauces, oils",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Home,
    name: "Household",
    items: "Cleaning, toiletries, supplies",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Candy,
    name: "Snacks & Sweets",
    items: "Crisps, biscuits, chocolates",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Egg,
    name: "Cooking Essentials",
    items: "Rice, flour, sugar, spices",
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Everything You Need,{" "}
            <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From fresh produce to household essentials, we stock a wide range of
            products to meet your daily needs.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group cursor-default border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                {cat.name}
              </h3>
              <p className="text-sm text-muted-foreground">{cat.items}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
