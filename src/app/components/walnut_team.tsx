'use client';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
const WalnutTeam = () => {
	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor max-md:mt-5 max-md:text-3xl"> Team </div>

			<div className="flex gap-x-40 w-5/6 mt-5 max-md:gap-x-10 justify-center mx-auto md:px-32">
				<AspectRatio ratio={9 / 4} className="border-blue-900 border-4">
					<Image src="/images/team/principal.jpg" alt="Principal" blurDataURL="/images/team/principal-small.jpg" placeholder="blur" fill />
				</AspectRatio>

				<AspectRatio ratio={9 / 4} className="border-blue-900 border-4">
					<Image src="/images/team/director.jpg" alt="Director" blurDataURL="/images/team/director-small.jpg" placeholder="blur" fill />
				</AspectRatio>
			</div>
		</>
	);
};
export default WalnutTeam;
