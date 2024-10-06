export const metadata = {
	title: "Contact Information",
	description: "Get in touch with Walnut Academy for inquiries, admissions, and more.",
	keywords: ["Walnut Academy", "Contact", "School", "Mansarovar", "Jaipur", "PG", "KG", "Nursery", "Prep", "Pre School", "English Medium"],
	robots: "index, follow", // Allow search engines to index the page
};

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <main>{children}</main>;
}
