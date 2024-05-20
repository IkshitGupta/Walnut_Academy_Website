'use client';
import Link from 'next/link';
import Image from 'next/image';
const MyFooter = () => {
	return (
		<>
			<div className="bg-blue-900 mt-10 text-white p-10">
				<div className="flex-col flex justify-center items-center w-1/2">
					<div className="m-2.5 ml-5">
						<Link href="/" className="flex space-x-2 items-center">
							<Image src="/images/LOGO.jpg" alt="Website Logo" width={65} height={0} quality={100} className="aspect-square" />
							<div className="text-right">
								<div className="text-4xl">Walnut Academy</div>
							</div>
						</Link>
					</div>

					<div>Walnut Academy, 175-176, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</div>
				</div>

				<div></div>
			</div>
		</>
	);
};
export default MyFooter;
