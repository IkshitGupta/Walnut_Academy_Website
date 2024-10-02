"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const MyFooter: FC = () => {
	return (
		<footer className="bg-blue-900 mt-10 text-white py-8 flex flex-wrap items-center justify-center gap-y-5 gap-x-16 px-10 md:px-28">
			{/* Logo and Address */}
			<div className="flex flex-col items-center text-center">
				<Link href="/" className="flex gap-x-2 items-center" prefetch={false}>
					<Image src="/images/LOGO-bg-1e3a8a.png" alt="Website Logo" width={70} height={70} quality={100} className="max-md:hidden" />
					<Image src="/images/LOGO-bg-1e3a8a.png" alt="Website Logo" width={50} height={50} quality={100} className="md:hidden" />
					<div>
						<h2 className="text-4xl font-semibold max-md:text-xl text-[#ffa500]">Walnut Academy</h2>
					</div>
				</Link>
				<p className="mt-2 text-lg md:text-xl max-md:text-sm">175, Prajapati Vihar, Patrakar Colony Road, Mansarovar, Jaipur, Rajasthan-302020</p>
			</div>

			{/* Contact Details */}
			<div className="text-center">
				<h3 className="md:text-2xl text-xl font-semibold text-[#ffa500]">Get in Touch</h3>
				<div className="flex flex-col items-center mt-3">
					<div className="flex items-center gap-x-2 md:text-lg max-md:text-sm">
						<Image src="/icons/phone-white.svg" alt="Phone Icon" width={25} height={25} />
						<span>+91 9694853435</span>
					</div>
					<div className="flex items-center gap-x-2 md:text-lg max-md:text-sm mt-2">
						<Image src="/icons/mail-white.svg" alt="Mail Icon" width={25} height={25} />
						<span>walnutacademy2017@gmail.com</span>
					</div>
				</div>
			</div>

			{/* Social Media Links */}
			<div className="text-center">
				<h3 className="md:text-2xl text-xl font-semibold text-[#ffa500]">Stay Connected</h3>
				<div className="flex items-center justify-center space-x-4 mt-3">
					<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank" prefetch={false}>
						<Image src="/icons/facebook.svg" alt="Visit Walnut Academy on Facebook" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
					</Link>
					<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank" prefetch={false}>
						<Image src="/icons/youtube.svg" alt="Visit Walnut Academy on YouTube" width={40} height={40} className="hover:scale-110 transition-transform duration-300" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default MyFooter;
