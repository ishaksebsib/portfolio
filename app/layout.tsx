import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishak Sebsib | System.Root",
  description:
    "Full Stack Developer Portfolio - Specialized in High-Performance Systems.",
  metadataBase: new URL("https://ishak.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased bg-background text-foreground min-h-screen bg-dots relative overflow-x-hidden scanlines`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 vignette pointer-events-none z-50" />
          <div className="relative max-w-5xl mx-auto px-6 py-12 lg:py-24 z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
