import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sreedev Rajendran | Portfolio",
  description: "Terminal-inspired portfolio of Sreedev Rajendran, a B.Tech Computer Science and AI student. Exploring Web Development, Python, and AI.",
  keywords: ["sreedev", "sreedevrajendran", "Sreedev", "Sreedev Rajendran", "Portfolio", "Web Developer", "AI Student"],
  authors: [{ name: "Sreedev Rajendran" }],
  creator: "Sreedev Rajendran",
  publisher: "Sreedev Rajendran",
  icons: {
    icon: "/sreedev.jpg",
    apple: "/sreedev.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sreedev-portfolio.vercel.app", // Assuming a common hosting, though we should ideally use the real URL if known
    title: "Sreedev Rajendran | Portfolio",
    description: "Personal portfolio of Sreedev Rajendran, showcasing projects in Web Dev and AI.",
    siteName: "Sreedev Rajendran Portfolio",
    images: [
      {
        url: "/sreedev.jpg",
        width: 800,
        height: 800,
        alt: "Sreedev Rajendran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreedev Rajendran | Portfolio",
    description: "Personal portfolio of Sreedev Rajendran, showcasing projects in Web Dev and AI.",
    images: ["/sreedev.jpg"],
    creator: "@HeyItsSreedev",
    site: "@HeyItsSreedev",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sreedev Rajendran",
              "alternateName": ["sreedev", "sreedevrajendran"],
              "url": "https://sreedev-portfolio.vercel.app", // Adjust if you have a custom domain
              "image": "/sreedev.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/sreedev-rajendran-3296b5321/",
                "https://www.instagram.com/zrr.dev/",
                "https://github.com/sreedevrajendran",
                "https://x.com/HeyItsSreedev"
              ],
              "jobTitle": "Web Developer & AI Student",
              "worksFor": {
                "@type": "Organization",
                "name": "Providence College of Engineering"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
