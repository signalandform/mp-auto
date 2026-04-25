import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MP Auto Repair | Honest Auto Repair in Arlington, TX",
  description:
    "MP Auto Repair is a trusted family-owned auto repair shop in Arlington, TX, known for fair pricing, clear explanations, and dependable service.",
  keywords: [
    "MP Auto Repair",
    "Arlington auto repair",
    "Arlington mechanic",
    "brake repair Arlington TX",
    "oil change Arlington TX",
    "car diagnostics Arlington",
  ],
  openGraph: {
    title: "MP Auto Repair | Arlington, TX",
    description:
      "Family-owned auto repair in Arlington with honest service, fair pricing, and fast turnaround.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
