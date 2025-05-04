import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio - Aditya Chaudhari | Senior Software Engineer",
  description:
    "Aditya Chaudhari's portfolio showcasing expertise in Full Stack Development, Cloud Infrastructure, CI/CD, Kubernetes, and more.",
  keywords: "software engineer, full stack, cloud, CI/CD, Kubernetes, AWS, React, Node.js, portfolio, Bluehost, HostGator, Network Solutions, Register.com, Domain.com, BigRock, web hosting, software development",
  openGraph: {
    title: "My Portfolio - Aditya Chaudhari | Senior Software Engineer",
    description:
      "Aditya Chaudhari's portfolio showcasing expertise in Full Stack Development, Cloud Infrastructure, CI/CD, Kubernetes, and more.",
    url: "https://adityachaudhari.com",
    siteName: "Aditya Chaudhari",
    type: "website",
    images: [
      {
        url: "https://adityachaudhari.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Chaudhari Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, structured data, and other head elements */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {/* Structured Data (JSON-LD for schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Chaudhari",
              url: "https://adityachaudhari.com",
              jobTitle: "Senior Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Newfold Digital",
              },
              sameAs: [
                "https://linkedin.com/in/adityachaudhari",
                "https://github.com/aditya-chaudhari",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
