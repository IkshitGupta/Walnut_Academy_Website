'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
const RoomGallery = () => {
	const images = [1, 2, 3, 4].map((num) => `/images/room/${num}.jpg`);
	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor"> Photo Gallery </div>

			<div className="mt-5 w-4/5 mx-auto">
				<Carousel
					className="ml-10"
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent className="-ml-10">
						{images.map((src, index) => (
							<CarouselItem className="basis-1/3 pl-10" key={index + 1}>
								<AspectRatio ratio={1 / 1} className="border-blue-900 border-4">
									<Image src={src} alt={`Room ${index + 1}`} blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
								</AspectRatio>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</>
	);
};
export default RoomGallery;
