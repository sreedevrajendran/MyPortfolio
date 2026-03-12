import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sreedev Rajendran | Visual Creator & Engineer",
  description: "Portfolio of Sreedev Rajendran - Computer Science & AI Engineer, Developer, and Visual Creator.",
};

import MouseTrail from "@/components/MouseTrail";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
