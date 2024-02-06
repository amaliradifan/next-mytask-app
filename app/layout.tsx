import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalStyleProvider } from "./providers/GlobalStyleProvider";
import { Sidebar } from "./ui/sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Task Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GlobalStyleProvider>
					<Sidebar />
					{children}
					<Toaster position="top-right" />
				</GlobalStyleProvider>
			</body>
		</html>
	);
}
