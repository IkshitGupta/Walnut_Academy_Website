'use client';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
const WalnutTeam = () => {
	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor max-md:mt-5 max-md:text-3xl"> Team </div>
			<div className="flex gap-x-40 w-5/6 mx-auto items-center mt-5 max-md:gap-x-16">
				<AspectRatio ratio={15 / 4} className="border-blue-900 border-4">
					<Image src="/images/building.jpg" alt="Principal" blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
				</AspectRatio>

				<AspectRatio ratio={15 / 4} className="border-blue-900 border-4">
					<Image src="/images/building.jpg" alt="Director" blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
				</AspectRatio>
			</div>
		</>
	);
};
export default WalnutTeam;
