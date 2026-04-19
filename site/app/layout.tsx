import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-head",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aithority — AI-Powered Growth Agency",
  description:
    "Aithority delivers AI-powered SEO, paid media, automation, and custom web development for multi-location businesses and ambitious brands ready to dominate search.",
  metadataBase: new URL("https://getaithority.co"),
  openGraph: {
    title: "Aithority — AI-Powered Growth Agency",
    description:
      "Search built by machines. Run by experts. AI-powered SEO, paid media, automation, and custom Next.js web development.",
    url: "https://getaithority.co",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-head), -apple-system, sans-serif" }}>
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
