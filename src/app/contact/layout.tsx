export const metadata = {
	title: "Contact Information",
	description: "Get in touch with Walnut Academy for inquiries, admissions, and more.",
	keywords: ["Walnut Academy", "Contact", "School", "Mansarovar", "Jaipur", "PG", "KG", "Nursery", "Prep", "Pre School"],
	robots: "index, follow", // Allow search engines to index the page
	viewport: "width=device-width, initial-scale=1.0",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <main>{children}</main>;
}
