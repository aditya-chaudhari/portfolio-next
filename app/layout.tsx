import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { jsonLdPerson, siteKeywords, siteMetaDescription } from "@/lib/site-content";
import "./globals.css";

/** Stitch design system: headlines (DESIGN.md). */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Stitch design system: body / UI text. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aditya Chaudhari | Portfolio",
  description: siteMetaDescription,
  keywords: siteKeywords,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aditya Chaudhari | Portfolio",
    description: siteMetaDescription,
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
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        {children}
      </body>
    </html>
  );
}
