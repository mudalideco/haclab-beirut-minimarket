"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: string;
  displayText?: string;
}

/**
 * Renders stat values correctly on static export by showing the correct
 * number immediately. Adds a subtle fade-in-up animation when the element
 * scrolls into view. No react-countup dependency — works reliably with
 * Next.js static export.
 */
export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  separator = "",
  displayText,
}: CountUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const formatNumber = (n: number) => {
    let fixed = n.toFixed(decimals);
    if (separator) {
      const parts = fixed.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      fixed = parts.join(".");
    }
    return `${prefix}${fixed}${suffix}`;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If displayText is provided, render it directly (static text like "7 Days")
  if (displayText) {
    return (
      <span
        ref={ref}
        className={`inline-block transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {displayText}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {formatNumber(end)}
    </span>
  );
}
