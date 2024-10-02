"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
const MyFooter: FC = () => {
	return (
		<>
			<div className="bg-blue-900 mt-10 text-white md:py-5 flex px-28 max-md:mt-5 flex-wrap max-md:px-10 gap-y-2 items-center justify-center gap-x-16">
				<div className="flex-col flex justify-center items-center">
					<div className="m-2.5 ml-5">
						<Link href="/" className="flex gap-x-2 items-center max-md:gap-x-0.5" prefetch={false}>
							<Image src="/images/LOGO-bg-1e3a8a.png" alt="Website Logo" width={70} height={0} quality={100} className="aspect-square max-md:hidden" />
							<Image src="/images/LOGO-bg-1e3a8a.png" alt="Website Logo" width={40} height={0} quality={100} className="aspect-square md:hidden" />
							<div className="max-md:text-center">
								<div className="text-4xl font-semibold max-md:text-xl"> Walnut Academy </div>
							</div>
						</Link>
					</div>

					<div className="md:text-xl text-center max-md:text-sm">175, Prajapati Vihar, Patrakar Colony Road, Mansarovar, Jaipur, Rajasthan-302020</div>
				</div>

				<div className="max-md:text-center">
					<div className="md:text-xl pb-3 max-md:pb-0.5 text-[#ffa500] font-semibold">GET IN TOUCH</div>
					<div className="flex gap-x-1 items-center md:text-lg max-md:justify-center">
						<Image src="/icons/phone-white.svg" alt="Phone Icon" width={25} height={0} className="max-md:hidden" />
						<Image src="/icons/phone-white.svg" alt="Phone Icon" width={20} height={0} className="md:hidden" />
						<div>+91 9694853435</div>
					</div>
					<div className="flex gap-x-2 items-center md:text-lg mb-3 max-md:mb-0.5 max-md:justify-center">
						<Image src="/icons/mail-white.svg" alt="Mail Icon" width={25} height={0} className="max-md:hidden" />
						<Image src="/icons/mail-white.svg" alt="Mail Icon" width={20} height={0} className="md:hidden" />
						<div>walnutacademy2017@gmail.com</div>
					</div>
					{/* <Link href="/contact" className="md:text-lg text-[#ffa500] font-bold" prefetch={false}>
						CONTACT US
					</Link> */}
					<div className="md:text-xl pb-3 max-md:pb-0.5 mt-3 max-md:mt-0.5 text-[#ffa500] font-semibold">STAY CONNECTED</div>
					<div className="flex space-x-2 max-md:justify-center">
						<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank" prefetch={false}>
							<Image src="/icons/facebook.svg" alt="Visit Walnut Academy on Facebook" width={35} height={0} className="max-md:hidden" />
							<Image src="/icons/facebook.svg" alt="Visit Walnut Academy on Facebook" width={30} height={0} className="md:hidden" />
						</Link>
						<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank" prefetch={false}>
							<Image src="/icons/youtube.svg" alt="Visit Walnut Academy on YouTube" width={35} height={0} className="max-md:hidden" />
							<Image src="/icons/youtube.svg" alt="Visit Walnut Academy on YouTube" width={30} height={0} className="md:hidden" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default MyFooter;
