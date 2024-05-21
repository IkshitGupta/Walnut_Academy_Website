'use client';
import Link from 'next/link';
import Image from 'next/image';
const MyFooter = () => {
	return (
		<>
			<div className="bg-blue-900 mt-10 text-white py-10 flex justify-between px-28">
				<div className="flex-col flex justify-center items-center">
					<div className="m-2.5 ml-5">
						<Link href="/" className="flex space-x-2 items-center">
							<Image src="/images/LOGO-bg-1e3a8a.png" alt="Website Logo" width={70} height={0} quality={100} className="aspect-square" />
							<div className="text-right">
								<div className="text-4xl">Walnut Academy</div>
							</div>
						</Link>
					</div>

					<div className='text-lg'>Walnut Academy, 175-176, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</div>
				</div>

				<div className="flex flex-col justify-center">
					<div className="text-xl pb-3">GET IN TOUCH</div>
					<div className="flex gap-x-2 items-center text-lg">
						<Image src="/icons/phone.png" alt="Phone Icon" width={25} height={0} />
						<div>+91 9694853435</div>
					</div>
					<div className="flex gap-x-2 items-center text-lg">
						<Image src="/icons/mail.png" alt="Phone Icon" width={20} height={0} />
						<div>walnutacademy2017@gmail.com</div>
					</div>
					<div className="text-xl pb-3 mt-3">STAY CONNECTED</div>
					<div className="flex space-x-2">
						<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank">
							<Image src="/icons/facebook-white.svg" alt="Walnut Academy Facebook" width={35} height={0} />
						</Link>
						<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank">
							<Image src="/icons/youtube-white.svg" alt="Walnut Academy YouTube" width={35} height={0} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default MyFooter;
