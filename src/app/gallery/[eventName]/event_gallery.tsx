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
	// State to hold the currently loaded events
	const [loadedImages, setLoadedImages] = useState<FolderImages[]>([]);
	// How many events to load at once (set to 2 as required)
	const [eventsPerPage] = useState(2);
	const [currentPage, setCurrentPage] = useState(1);

	// useEffect hook to load the initial set of events and any additional events when currentPage changes
	useEffect(() => {
		const loadImages = () => {
			const newEvents = folderImages.slice(0, currentPage * eventsPerPage);
			setLoadedImages(newEvents);
		};

		loadImages();
	}, [currentPage, folderImages, eventsPerPage]);

	// Function to handle "Load More" button click
	const handleLoadMore = () => {
		setCurrentPage((prevPage) => prevPage + 1); // Increase the currentPage to load more events
	};

	return (
		<>
			{/* Render loaded events */}
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

			{/* "Load More" button only appears if there are more events to load */}
			{currentPage * eventsPerPage < folderImages.length && (
				<div className="text-center mt-4">
					<button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleLoadMore}>
						Load More
					</button>
				</div>
			)}
		</>
	);
}
