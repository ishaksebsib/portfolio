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
  title: "Ishak Sebsib | Portfolio",
  description:
    "Welcome to my Portfolio website. Explore my projects, skills, and experience.",
  metadataBase: new URL("https://ishak.io"), // Ensures proper domain base
  alternates: {
    canonical: "https://ishak.io", // Sets canonical URL
  },
  openGraph: {
    title: "Ishak Sebsib | Portfolio",
    description:
      "Welcome to my Portfolio website. Explore my projects, skills, and experience.",
    url: "https://ishak.io",
    siteName: "Ishak Sebsib Portfolio",
    images: [
      {
        url: "https://ishak.io/assets/img/avatar.png",
        width: 1200,
        height: 630,
        alt: "Ishak Sebsib Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ishaksebsib",
    title: "Ishak Sebsib | Portfolio",
    description: "Welcome to my portfolio website.",
    images: ["https://ishak.io/assets/img/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
