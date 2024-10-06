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
				<meta name="keywords" content="Walnut Academy, School, Education, Jaipur, Mansarovar, PreSchool, Nursery, KG, Prep, Play Group, English Medium" />
				<title>Walnut Academy</title>
				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="Walnut Academy" />
				<meta property="og:description" content="Walnut Academy - A premier educational institution in Mansarovar, Jaipur." />
				<meta property="og:image" content="/images/building-crop.jpg" /> {/* Replace with your actual image path */}
				<meta property="og:url" content="https://yourwebsite.com" />
				<meta property="og:type" content="website" />
				{/* Structured Data for Search Engines */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@type": "Place",
							name: "Walnut Academy",
							address: {
								"@type": "PostalAddress",
								streetAddress: "175, Prajapati Vihar",
								addressLocality: "Mansarovar",
								addressRegion: "Rajasthan",
								postalCode: "302020",
								addressCountry: "IN",
							},
						}),
					}}
				/>
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
