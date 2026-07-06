"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MapPin, Clock, ShoppingBag, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88, x: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Deep parallax background layer */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Ambient gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/8 to-primary/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/4 blur-2xl" />

        {/* Decorative ring */}
        <motion.div
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/8"
        />
        <motion.div
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/8"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                <MapPin className="w-4 h-4" />
                Your Neighborhood Store — Makindye
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary">Beirut MiniMarket</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Your trusted neighborhood convenience store on Bulaimu Kibirige
                Road, Makindye. Fresh groceries, household essentials, and
                friendly service — every day.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="tel:+256782511111"
                whileHover={{ scale: 1.05, boxShadow: "0 12px 28px rgba(22,163,74,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call +256 782 511 111
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all"
              >
                <MapPin className="w-5 h-5" />
                Find Us
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                Open Daily: 7:00 AM – 9:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Makindye, Kampala
              </span>
            </motion.div>
          </motion.div>

          {/* Right — real store photography with parallax depth */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative card behind image with subtle rotate */}
              <motion.div
                animate={{ rotate: [3, 3.5, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"
              />

              {/* Real image card with parallax scroll effect */}
              <motion.div
                style={{ y: imageParallax, scale: imageScale }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden -rotate-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop&q=80"
                  alt="Beirut MiniMarket — Fresh groceries and essentials at your neighborhood convenience store in Makindye"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating tags with spring animation */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="inline-block bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                  >
                    <ShoppingBag className="w-3 h-3 inline mr-1" />
                    Fresh produce daily
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                    className="inline-block bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                  >
                    Open 7 days
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
