'use client';
import Link from 'next/link';
import CustomNavbar from './components/navbar_site';
import CustomHeader from './components/header_site';
import { Separator } from "@/components/ui/separator"
import './globals.css';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Admission', href: '/admission' },
	{ name: 'Contact Us', href: '/contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className = "box-border m-0 p-0">
				<CustomHeader/>
				<Separator/>
				{/* <div>
					{navLinks.map((link) => {
						const isActive = pathname === link.href;
						return (
							<Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
								{link.name}
							</Link>
						);
					})}
				</div> */}
				<CustomNavbar/>
				<Separator/>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
