"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";

const hours = [
  { day: "Monday – Friday", hours: "7:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
  { day: "Public Holidays", hours: "8:00 AM – 6:00 PM" },
];

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Visit <span className="text-primary">Beirut MiniMarket</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We are conveniently located in Makindye — stop by and say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map / Location visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary-50 border border-gray-100 h-full min-h-[320px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                  Bulaimu Kibirige Road
                </h3>
                <p className="text-muted-foreground mb-4">
                  Makindye, Kampala, Uganda
                </p>
                <a
                  href="https://maps.google.com/?q=Beirut+MiniMarket+Makindye+Kampala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold font-heading text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-2 border-b border-primary/10 last:border-0"
                  >
                    <span className="font-medium text-foreground">
                      {h.day}
                    </span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6" />
                <h3 className="text-xl font-bold font-heading">
                  Call or WhatsApp
                </h3>
              </div>
              <p className="text-white/80 mb-3">
                Have a question or want to check stock? Give us a call!
              </p>
              <a
                href="tel:+256782511111"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +256 782 511 111
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
