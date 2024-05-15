export const metadata = {
	title: 'Contact Information',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<h2>Mobile Number</h2>
		</>
	);
}
