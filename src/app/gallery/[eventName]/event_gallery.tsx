"use client"; // Mark this file as a client component

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Define types for folder images and props
type FolderImages = {
	folderName: string;
	images: string[];
};

type EventGalleryProps = {
	folderImages: FolderImages[];
	eventName: string;
};

// ImageModal component for displaying enlarged images
const ImageModal = ({ imageSrc, onClose }: { imageSrc: string; onClose: () => void }) => {
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
			onClick={onClose} // Close modal on overlay click
		>
			<div className="relative" onClick={(e) => e.stopPropagation()}>
				<button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">
					✖️
				</button>
				<Image src={imageSrc} alt="Enlarged view" width={800} height={600} className="object-contain" />
			</div>
		</div>
	);
};

export default function EventGallery({ folderImages, eventName }: EventGalleryProps) {
	const [loadedEvents, setLoadedEvents] = useState<FolderImages[]>([]);
	const [eventsPerPage] = useState(2); // Number of events to load at a time
	const [currentPage, setCurrentPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
	const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the currently selected image

	useEffect(() => {
		const loadEvents = () => {
			const newEvents = folderImages.slice(0, currentPage * eventsPerPage);
			setLoadedEvents(newEvents);
		};

		loadEvents();

		return () => {};
	}, [currentPage, folderImages, eventsPerPage]);

	const handleLoadMore = () => {
		setCurrentPage((prevPage) => prevPage + 1); // Load next set of events
	};

	// Function to open the modal with the selected image
	const openModal = (image: string) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
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
								<Image src={`/images/gallery/${eventName}/${folder.folderName}/${image}`} alt={`Image ${imageIndex} of ${folder.folderName}`} blurDataURL={`/images/gallery/${eventName}/${folder.folderName}/small/${image}`} placeholder="blur" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover cursor-pointer rounded-lg" loading="lazy" onClick={() => openModal(`/images/gallery/${eventName}/${folder.folderName}/${image}`)} />
							</div>
						))}
					</div>
				</div>
			))}

			{/* "Load More" button only appears if there are more events to load */}
			{currentPage * eventsPerPage < folderImages.length && (
				<div className="text-center mt-4">
					<button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300" onClick={handleLoadMore}>
						Load More
					</button>
				</div>
			)}

			{/* Render the ImageModal if open */}
			{isModalOpen && selectedImage && <ImageModal imageSrc={selectedImage} onClose={closeModal} />}
		</>
	);
}
