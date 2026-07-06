"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+256 782 511 111",
    href: "tel:+256782511111",
    bg: "bg-green-50 text-green-600",
    cta: "Contact Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+256 782 511 111",
    href: "https://wa.me/256782511111",
    bg: "bg-emerald-50 text-emerald-600",
    cta: "Send Message",
  },
  {
    icon: Mail,
    title: "Email",
    value: "mitchove@hotmail.com",
    href: "mailto:mitchove@hotmail.com",
    bg: "bg-blue-50 text-blue-600",
    cta: "Send Email",
    note: "PS: A dedicated business email (e.g., beirutminimarket@gmail.com) would look more professional — consider setting one up.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bulaimu Kibirige Rd, Makindye",
    href: "https://maps.google.com/?q=Beirut+MiniMarket+Makindye+Kampala",
    bg: "bg-orange-50 text-orange-600",
    cta: "Open Maps",
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

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            We Would Love to{" "}
            <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a question, special request, or just want to say hello? Reach
            out to us anytime!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group block"
            >
              <div
                className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                {method.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {method.value}
              </p>
              <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {method.cta ?? "Get in Touch"}
                <ArrowRight className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Professional email suggestion note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center"
        >
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>Tip:</strong> A dedicated business email (e.g.,{" "}
            <span className="font-mono">beirutminimarket@gmail.com</span> or{" "}
            <span className="font-mono">info@beirutminimarket.com</span>) would
            look more professional for your business communications. Consider
            setting one up to replace the personal Hotmail address.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
