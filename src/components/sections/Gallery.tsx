"use client";

import { motion } from "framer-motion";
import { ImageIcon, ShoppingBag, Apple, Milk, Home as HomeIcon } from "lucide-react";

const galleryItems = [
  {
    label: "Fresh Produce",
    icon: Apple,
    desc: "Daily fresh fruits & vegetables",
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Dairy & Beverages",
    icon: Milk,
    desc: "Milk, yoghurt, juices & sodas",
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Snacks & Treats",
    icon: ShoppingBag,
    desc: "Crisps, biscuits, chocolates & more",
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Household Items",
    icon: HomeIcon,
    desc: "Cleaning supplies & toiletries",
    color: "bg-purple-50 text-purple-600",
  },
  {
    label: "Cooking Staples",
    icon: Apple,
    desc: "Rice, flour, sugar, oil & spices",
    color: "bg-red-50 text-red-600",
  },
  {
    label: "Bakery & Bread",
    icon: ImageIcon,
    desc: "Fresh bread, chapati & pastries",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function Gallery() {
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
            In Our Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Explore Our{" "}
            <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From farm-fresh produce to everyday essentials — we have it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold font-heading text-foreground mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Visit our store to see the full range in person!
        </motion.p>
      </div>
    </section>
  );
}
