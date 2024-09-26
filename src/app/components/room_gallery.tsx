"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const RoomGallery = () => {
	const images = [1, 2, 3, 4].map((num) => `/images/room/${num}.jpg`);

	return (
		<>
			<div className="text-center text-4xl mt-10 font-bold text-headingColor max-md:mt-5 max-md:text-3xl"> Photo Gallery </div>

			<div className="mt-5 w-4/5 mx-auto max-md:w-4/6">
				<Carousel
					className="md:ml-10"
					opts={{
						align: "start",
						loop: true,
					}}>
					<CarouselContent className="-ml-10">
						{images.map((src, index) => (
							<CarouselItem className="basis-1/3 pl-10 max-md:basis-1/2" key={index + 1}>
								<AspectRatio ratio={1 / 1} className="border-blue-900 border-4">
									<Image src={src} alt={`Room ${index + 1} - A snapshot of one of the rooms at Walnut Academy`} blurDataURL="/images/building-small.jpg" placeholder="blur" fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" />
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
