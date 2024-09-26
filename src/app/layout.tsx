"use client";
import CustomNavbar from "./components/navbar_site";
import CustomHeader from "./components/header_site";
import CustomFooter from "./components/footer_site";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* Meta tags for SEO and responsiveness */}
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Walnut Academy - A premier educational institution in Mansarovar, Jaipur." />
				<title>Walnut Academy</title>
			</head>
			<body className="box-border m-0 p-0">
				{/* Header Section */}
				<CustomHeader />
				{/* Navigation Bar */}
				<CustomNavbar />
				{/* Main Content */}
				<main>{children}</main>
				{/* Footer Section */}
				<CustomFooter />
			</body>
		</html>
	);
}
