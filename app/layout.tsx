import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ishak Sebsib Portfolio",
	description: "Ishak Sebsib Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${fontSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
