'use client';
import CustomNavbar from './components/navbar_site';
import CustomHeader from './components/header_site';
import { Separator } from "@/components/ui/separator"
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className = "box-border m-0 p-0">
				<CustomHeader/>
				<Separator/>
				<CustomNavbar/>
				<Separator/>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
