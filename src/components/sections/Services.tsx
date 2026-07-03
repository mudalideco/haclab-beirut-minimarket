"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Phone,
  Timer,
  Gift,
  RefreshCw,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Quick Shopping",
    description:
      "In-and-out convenience for your daily essentials. We are organized to save you time.",
  },
  {
    icon: Phone,
    title: "Phone Orders",
    description:
      "Call ahead and we will have your order ready for pickup. Just ring +256 782 511 111.",
  },
  {
    icon: Timer,
    title: "Early & Late Hours",
    description:
      "Open from 7 AM to 9 PM daily — perfect for early birds and night owls alike.",
  },
  {
    icon: Gift,
    title: "Bulk & Wholesale",
    description:
      "Need larger quantities? We offer wholesale pricing for businesses and events.",
  },
  {
    icon: RefreshCw,
    title: "Fresh Stock Daily",
    description:
      "We restock fresh produce and essentials every morning to ensure quality.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "Proudly serving the Makindye community with personalized, friendly service.",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            More Than Just a{" "}
            <span className="text-primary">Convenience Store</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We go the extra mile to serve you better. Here is what we offer
            beyond the shelves.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-white transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
