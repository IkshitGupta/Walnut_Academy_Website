"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const MyHeader: FC = () => {
	return (
		<header className="bg-blue-900 h-16 flex justify-between items-center px-4 md:px-32">
			<div className="flex-1 text-2xl text-center text-white font-semibold animate-admission-color font-sans max-sm:text-base max-sm:mx-5">
				<span className="px-2 py-1 rounded-lg">Admission Open From Class Play Group to Class Eighth</span>
			</div>
			<div className="flex space-x-4">
				<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank" prefetch={false}>
					<Image src="/icons/facebook.svg" alt="Visit Walnut Academy on Facebook" width={40} height={40} className="hover:scale-110 hover:opacity-80 transition-transform duration-300" />
				</Link>
				<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank" prefetch={false}>
					<Image src="/icons/youtube.svg" alt="Visit Walnut Academy on YouTube" width={40} height={40} className="hover:scale-110 hover:opacity-80 transition-transform duration-300" />
				</Link>
			</div>
		</header>
	);
};

export default MyHeader;
