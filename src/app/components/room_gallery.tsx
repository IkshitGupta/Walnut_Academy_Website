"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const RoomGallery = () => {
	// Define both large and small image paths
	const images = [1, 2, 3, 4, 5, 6, 7].map((num) => ({
		large: `/images/room/${num}.jpg`,
		small: `/images/room/small/${num}.jpg`, // Small placeholder image
	}));

	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor max-md:mt-5 max-md:text-3xl">Photo Gallery</div>

			<div className="mt-5 w-4/5 mx-auto max-md:w-4/6">
				<Carousel
					className="relative"
					opts={{
						align: "start",
						loop: true,
					}}>
					<CarouselContent className="flex -ml-10 max-md:-ml-4">
						{images.map((image, index) => (
							<CarouselItem className="basis-1/3 pl-10 max-md:basis-1/2 max-md:pl-4" key={index + 1}>
								<AspectRatio ratio={1 / 1} className="border-blue-900 border-4 rounded-lg">
									<Image src={image.large} alt={`Room ${index + 1} - A snapshot of one of the rooms at Walnut Academy`} blurDataURL={image.small} placeholder="blur" fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" loading="lazy" className="object-cover rounded-lg" />
								</AspectRatio>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Carousel Navigation Buttons */}
					<CarouselPrevious className="transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-400 transition-colors" aria-label="Previous Slide" />
					<CarouselNext className="transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-400 transition-colors" aria-label="Next Slide" />
				</Carousel>
			</div>
		</>
	);
};

export default RoomGallery;
