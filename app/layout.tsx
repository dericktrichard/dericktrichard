import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dericktrichard.com"),

  title: {
    default: "Derick Richard | Data & Software",
    template: "%s | Derick Richard",
  },

  description:
    "Derick Richard is a Computer Technology graduate focused on Data Analytics, software development and applied AI.",

  applicationName: "Derick Richard",

  keywords: [
    "Derick Richard",
    "Data Analytics",
    "Software Development",
    "Artificial Intelligence",
    "Computer Technology",
    "Portfolio",
  ],

  authors: [
    {
      name: "Derick Richard",
    },
  ],

  creator: "Derick Richard",

  openGraph: {
    type: "website",
    siteName: "Derick Richard",
    title: "Derick Richard | Data & Software",
    description:
      "Computer Technology graduate focused on Data Analytics, software development and applied AI.",
    url: "https://dericktrichard.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Derick Richard | Data & Software",
    description:
      "Computer Technology graduate focused on Data Analytics, software development and applied AI.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}