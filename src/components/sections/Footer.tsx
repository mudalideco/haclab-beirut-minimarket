"use client";

import { ShoppingBag, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-heading">
                  Beirut
                </span>
                <span className="text-lg font-bold text-primary font-heading">
                  MiniMarket
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted neighborhood convenience store on Bulaimu Kibirige
              Road, Makindye. Serving the community with quality products and
              friendly service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-heading text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Why Us", href: "#why-us" },
                { label: "Location", href: "#location" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold font-heading text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Beirut+MiniMarket+Makindye+Kampala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Bulaimu Kibirige Road,
                    <br />
                    Makindye, Kampala, Uganda
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+256782511111"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +256 782 511 111
                </a>
              </li>
              <li>
                <a
                  href="mailto:mitchove@hotmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  mitchove@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold font-heading text-white mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white">7 AM – 9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">7 AM – 9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">8 AM – 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays</span>
                <span className="text-white">8 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Beirut MiniMarket. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Powered by{" "}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
