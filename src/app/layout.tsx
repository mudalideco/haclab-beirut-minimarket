import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beirut MiniMarket | Neighborhood Convenience Store in Makindye",
  description:
    "Beirut MiniMarket on Bulaimu Kibirige Road, Makindye — your trusted neighborhood convenience store for fresh groceries, essentials, snacks & more. Open daily.",
  keywords:
    "Beirut MiniMarket, Makindye convenience store, Kampala supermarket, Bulaimu Kibirige Road, groceries Kampala, neighborhood store Makindye",
  openGraph: {
    title: "Beirut MiniMarket | Makindye Convenience Store",
    description:
      "Fresh groceries, household essentials, snacks & beverages on Bulaimu Kibirige Road, Makindye.",
    type: "website",
    locale: "en_UG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
