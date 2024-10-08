import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Separator } from "@/components/ui/separator";
import EventGallery from "./event_gallery"; // Import the new client component

const eventNames = ["festivals", "celebrations", "competitions"];

type Props = {
	params: {
		eventName: string;
	};
};

// Dynamic Metadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const eventName = params.eventName;
	const capitalizedTitle = eventName.charAt(0).toUpperCase() + eventName.slice(1);
	const description = `View photos from the ${capitalizedTitle} event at Walnut Academy. Browse through moments captured during this event.`;

	return {
		title: capitalizedTitle,
		description,
	};
};

type FolderImages = {
	folderName: string;
	images: string[];
};

function getFolderImages(eventName: string): FolderImages[] {
	try {
		const eventDirectory = path.join(process.cwd(), "public", "images", "gallery", eventName);
		if (!fs.existsSync(eventDirectory)) {
			return [];
		}
		const folders = fs
			.readdirSync(eventDirectory, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		return folders.map((folderName) => {
			const folderPath = path.join(eventDirectory, folderName);
			const images = fs.readdirSync(folderPath).filter((file) => !fs.lstatSync(path.join(folderPath, file)).isDirectory());
			return { folderName, images };
		});
	} catch (error) {
		console.error("Error fetching folder images:", error);
		return [];
	}
}

export default function EventPage({ params }: Props) {
	const { eventName } = params;

	// Validate event name
	if (!eventNames.includes(eventName)) {
		return notFound();
	}

	const folderImages = getFolderImages(eventName);

	// Handle case where no images are found
	if (folderImages.length === 0) {
		return <div className="text-center mt-10 text-red-600 font-semibold">No images available for the selected event.</div>;
	}

	return (
		<>
			<Separator className="h-0.5 bg-black" />
			{/* Pass folderImages to the client component */}
			<EventGallery folderImages={folderImages} eventName={eventName} />
		</>
	);
}

// Generate static params for each event
export async function generateStaticParams() {
	return eventNames.map((eventName) => ({
		eventName,
	}));
}
