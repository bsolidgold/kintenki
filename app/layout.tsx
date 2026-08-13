import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kintenki.com"),
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
      <body>{children}</body>
    </html>
  );
}
