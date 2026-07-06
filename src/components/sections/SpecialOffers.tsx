"use client";

import { motion } from "framer-motion";
import { Tag, Sparkles, Phone } from "lucide-react";

const offers = [
  {
    title: "Fresh Produce Bundles",
    description: "Get 10% off on all fresh fruit and vegetable bundles.",
    tag: "Weekly Deal",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Buy 2, Get 1 Free",
    description: "Select beverages and snacks — mix and match!",
    tag: "Promo",
    color: "from-accent to-orange-500",
  },
  {
    title: "Loyalty Program",
    description:
      "Shop with us regularly and earn points toward free products.",
    tag: "Membership",
    color: "from-primary to-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function SpecialOffers() {
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
            Special Offers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Great Deals,{" "}
            <span className="text-primary">Every Day</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We love giving our customers more value. Check out our latest
            promotions!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-90`}
              />
              <div className="relative p-6 text-white">
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                  <Tag className="w-3 h-3" />
                  {offer.tag}
                </span>
                <Sparkles className="w-8 h-8 text-white/70 mb-3" />
                <h3 className="text-xl font-bold font-heading mb-2">
                  {offer.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {offer.description}
                </p>
                <a
                  href="tel:+256782511111"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Ask Us
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
