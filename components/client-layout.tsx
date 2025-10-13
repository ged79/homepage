"use client";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { useTheme } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useTheme();

  return (
    <body
      className={`${inter.variable} ${nacelle.variable} ${
        isDarkMode 
          ? 'bg-gray-950 text-gray-200' 
          : 'bg-white text-gray-900'
      } font-inter text-base antialiased`}
    >
      {children}
    </body>
  );
}
