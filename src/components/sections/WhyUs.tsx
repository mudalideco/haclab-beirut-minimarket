"use client";

import { motion } from "framer-motion";
import {
  ThumbsUp,
  Clock,
  MapPin,
  BadgeCheck,
  Truck,
  Smile,
} from "lucide-react";

const reasons = [
  {
    icon: ThumbsUp,
    title: "Quality Products",
    description:
      "We carefully select every item on our shelves to ensure freshness and quality for you and your family.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Prices",
    description:
      "We keep our prices fair and competitive so you can get more for your money every time you shop.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description:
      "Open daily from 7:00 AM to 9:00 PM — including weekends and public holidays.",
  },
  {
    icon: MapPin,
    title: "Local & Accessible",
    description:
      "Conveniently located on Bulaimu Kibirige Road, right in the heart of Makindye community.",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    description:
      "We treat every customer like family. A warm smile and helpful service with every visit.",
  },
  {
    icon: Truck,
    title: "Quick & Easy",
    description:
      "In and out in minutes. We make your daily shopping fast and hassle-free.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Why Makindye Chooses{" "}
            <span className="text-primary">Beirut MiniMarket</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We are not just a store — we are your neighbors. Here is why our
            customers keep coming back.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-primary-50/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
