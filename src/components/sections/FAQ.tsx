"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What are your opening hours?",
    a: "We are open daily from 7:00 AM to 9:00 PM, Monday through Saturday. On Sundays and public holidays, we open at 8:00 AM and close at 8:00 PM (6:00 PM on holidays).",
  },
  {
    q: "Do you accept mobile money payments?",
    a: "Yes! We accept mobile money payments including MTN and Airtel Money for your convenience.",
  },
  {
    q: "Can I call ahead to check if an item is in stock?",
    a: "Absolutely! Give us a call at +256 782 511 111 and we will be happy to check stock and set items aside for you.",
  },
  {
    q: "Do you offer delivery services?",
    a: "For regular shopping, we encourage you to visit us. For bulk orders or special circumstances, please call us and we can discuss delivery options.",
  },
  {
    q: "Do you sell products in bulk/wholesale?",
    a: "Yes, we offer wholesale pricing for bulk purchases. Contact us for quotes on large orders for events, businesses, or organizations.",
  },
  {
    q: "Where exactly are you located?",
    a: "We are on Bulaimu Kibirige Road in Makindye, Kampala. We are easy to find — look for the Beirut MiniMarket signage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about shopping at Beirut MiniMarket.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-50/50 transition-colors"
              >
                <span className="font-medium text-foreground font-heading pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 p-6 bg-primary-50 rounded-2xl"
        >
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="tel:+256782511111"
              className="text-primary font-semibold hover:underline"
            >
              Call us anytime
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
