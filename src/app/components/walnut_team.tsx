"use client";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const WalnutTeam = () => {
	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor max-md:mt-5 max-md:text-3xl">Team</div>

			<div className="flex gap-x-20 mt-10 max-md:gap-x-5 justify-center mx-auto md:px-32 max-md:px-5">
				{/* Principal's Card */}
				<figure className="w-1/3 border-4 border-blue-900 rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg max-md:w-1/2 max-sm:w-full">
					<AspectRatio ratio={4 / 4}>
						<Image src="/images/team/principal.jpg" alt="Dr. Rekha Gupta, Principal of Walnut Academy" blurDataURL="/images/team/principal-small.jpg" placeholder="blur" fill />
					</AspectRatio>
					<figcaption className="text-center bg-[#414141] text-white py-2">
						<div className="text-lg max-md:text-sm">Dr. Rekha Gupta</div>
						<div className="font-bold max-md:text-sm">Principal</div>
					</figcaption>
				</figure>

				{/* Director's Card */}
				<figure className="w-1/3 border-4 border-blue-900 rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg max-md:w-1/2 max-sm:w-full">
					<AspectRatio ratio={4 / 4}>
						<Image src="/images/team/director.jpg" alt="Surender Mohan Gupta, Director of Walnut Academy" blurDataURL="/images/team/director-small.jpg" placeholder="blur" fill />
					</AspectRatio>
					<figcaption className="text-center bg-[#414141] text-white py-2">
						<div className="text-lg max-md:text-sm">Surender Mohan Gupta</div>
						<div className="font-bold max-md:text-sm">Director</div>
					</figcaption>
				</figure>
			</div>
		</>
	);
};

export default WalnutTeam;
