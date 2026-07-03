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
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+256 782 511 111",
    href: "https://wa.me/256782511111",
    bg: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: "mitchove@hotmail.com",
    href: "mailto:mitchove@hotmail.com",
    bg: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bulaimu Kibirige Rd, Makindye",
    href: "https://maps.google.com/?q=Beirut+MiniMarket+Makindye+Kampala",
    bg: "bg-orange-50 text-orange-600",
  },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
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
                {method.title === "Call Us" || method.title === "WhatsApp"
                  ? "Contact Now"
                  : "Get in Touch"}
                <ArrowRight className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
