import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Roboto, Rubik_Bubbles, Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
	variable: "--font-sans",
	subsets: ["latin"],
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

const rubikBubbles = Rubik_Bubbles({
	variable: "--font-rubik-bubbles",
	subsets: ["latin"],
	weight: ["400"],
});


export const metadata: Metadata = {
	title: "Ishak Sebsib | Portfolio",
	description: "Welcome to Ishak Sebsib's portfolio website. Explore my projects, skills, and experience.",
	metadataBase: new URL("https://ishak.io"), // Ensures proper domain base
	alternates: {
		canonical: "https://ishak.io", // Sets canonical URL
	},
	openGraph: {
		title: "Ishak Sebsib | Portfolio",
		description: "Welcome to Ishak Sebsib's portfolio website. Explore my projects, skills, and experience.",
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
			<head>
				<link rel="canonical" href="https://ishak.io" /> 
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${rubikBubbles.variable} ${fontSans.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
