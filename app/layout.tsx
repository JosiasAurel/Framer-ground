import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import GlobalProvider from "@/providers/global";
import Footer from "@/components/shared/footer";
import "@/styles/mdx.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers";
import Navbar from "@/components/shared/navbar";
import { CommandMenuProvider } from "@/context/command-menu";
import { CommandMenu } from "@/components/ui/command-menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Animation",
    "Interactive",
    "shadcn ui",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer motion",
    "Radix UI",
  ],
  creator: "Bossadi Zenith",
  authors: [
    {
      name: "bossadizenith",
      url: "https://bossadizenith.me",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@framer-ground",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Light.otf",
      weight: "100",
    },
    {
      path: "../fonts/Satoshi-Regular.otf",
      weight: "300",
    },
    {
      path: "../fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../fonts/Satoshi-Black.otf",
      weight: "900",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <GlobalProvider>
        <body className={cn(satoshi.className, "z-0")}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CommandMenuProvider>
              <Link
                href="https://pro.bossadizenith.me"
                className="h-12 border-b bg-muted flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mx-auto w-full max-w-3xl flex items-center justify-center">
                  🎉 Exciting News! 🎉. Ground Pro is now available. Animations
                  build for performance. performance
                </div>
              </Link>
              <Navbar />
              {children}
              <Footer />
              <CommandMenu />
            </CommandMenuProvider>
            <Analytics />
          </ThemeProvider>
        </body>
      </GlobalProvider>
    </html>
  );
}
