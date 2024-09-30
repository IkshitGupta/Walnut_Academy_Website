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
	const [loadedEvents, setLoadedEvents] = useState<FolderImages[]>([]);
	const [eventsPerPage] = useState(2); // Number of events to load at a time
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		// Function to load the current set of events based on the page number
		const loadEvents = () => {
			const newEvents = folderImages.slice(0, currentPage * eventsPerPage);
			setLoadedEvents(newEvents);
		};

		loadEvents(); // Call the function to load the initial set of events
	}, [currentPage, folderImages, eventsPerPage]);

	// Function to handle "Load More" button click
	const handleLoadMore = () => {
		setCurrentPage((prevPage) => prevPage + 1); // Load next set of events
	};

	return (
		<>
			{/* Render loaded events */}
			{loadedEvents.map((folder, folderIndex) => (
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
