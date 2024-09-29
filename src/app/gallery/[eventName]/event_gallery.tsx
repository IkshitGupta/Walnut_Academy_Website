"use client"; // Mark this file as a client component

import { useEffect, useState } from "react";
import Image from "next/image";

type FolderImages = {
	folderName: string;
	images: string[];
};

type EventGalleryProps = {
	folderImages: FolderImages[];
	eventName: string;
};

export default function EventGallery({ folderImages, eventName }: EventGalleryProps) {
	const [loadedImages, setLoadedImages] = useState<FolderImages[]>([]);
	const [imagesPerPage, setImagesPerPage] = useState(5); // Adjust this to control how many images load at once
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const loadImages = () => {
            console.log(currentPage);
			const newImages = folderImages.slice(0, currentPage * imagesPerPage);
			setLoadedImages(newImages);
		};

		loadImages();
	}, [currentPage, folderImages]);

	// Load more images when user scrolls to the bottom (infinite scroll)
	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	// This useEffect block is responsible for registering the handleScroll event listener when the component mounts and ensuring that the event listener is removed when the component unmounts. This is a standard practice to prevent memory leaks and unnecessary listeners.
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{loadedImages.map((folder, folderIndex) => (
				<div key={folderIndex} className="my-3">
					<div className="text-headingColor text-center font-bold text-3xl max-md:text-2xl">{folder.folderName}</div>
					<div className="flex flex-wrap mx-auto gap-4 justify-center mt-2 max-md:gap-3">
						{folder.images.map((image, imageIndex) => (
							<div key={imageIndex} className="relative w-1/6 h-80 max-md:w-1/4 max-md:h-44">
								<Image src={`/images/gallery/${eventName}/${folder.folderName}/${image}`} alt={`Image ${imageIndex} of ${folder.folderName}`} blurDataURL={`/images/gallery/${eventName}/${folder.folderName}/small/${image}`} placeholder="blur" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
							</div>
						))}
					</div>
				</div>
			))}

			{currentPage * imagesPerPage < folderImages.length && (
				<div className="text-center mt-4">
					<button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
						Load More
					</button>
				</div>
			)}
		</>
	);
}
