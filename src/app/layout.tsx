import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sreedev@portfolio:~",
  description: "Terminal portfolio of Sreedev Rajendran",
  icons: {
    icon: "/sreedev.jpg",
    apple: "/sreedev.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased bg-[#050505] min-h-screen relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
