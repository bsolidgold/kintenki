import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Quantico } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kintenkistudios.com"),
  title: "KinTenki Studios",
  description: "KinTenki is an independent game studio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KinTenki Studios",
    description: "KinTenki is an independent game studio.",
    url: "/",
    siteName: "KinTenki Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KinTenki Studios",
    description: "KinTenki is an independent game studio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={quantico.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
