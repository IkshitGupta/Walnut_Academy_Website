'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomNavbar from './components/navbar';
import './globals.css';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Admission', href: '/admission' },
	{ name: 'Contact Us', href: '/contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// const pathname = usePathname();
	return (
		<html lang="en">
			<body className = "box-border m-0 p-0">
				<header>Admission Open From Class Play Group to Class Fifth</header>
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
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
