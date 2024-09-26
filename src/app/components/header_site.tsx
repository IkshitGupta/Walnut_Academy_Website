"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const MyHeader: FC = () => {
	return (
		<div className="bg-blue-900 h-16 flex justify-between items-center px-4 md:px-32">
			<div className="flex-1 text-2xl text-center text-white animate-admission-color font-mono max-sm:text-base max-sm:mx-5">Admission Open From Class Play Group to Class Eighth</div>
			<div className="flex space-x-2">
				<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/facebook.svg" alt="Visit Walnut Academy on Facebook" width={44} height={0} className="hover:scale-110 transition-transform duration-300" />
				</Link>
				<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/youtube.svg" alt="Visit Walnut Academy on YouTube" width={45} height={0} className="hover:scale-110 transition-transform duration-300" />
				</Link>
			</div>
		</div>
	);
};

export default MyHeader;
