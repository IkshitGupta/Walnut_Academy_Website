import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

type Props = {
	params: {
		eventName: string;
	};
};

// Dynamic Metadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	// Waiting for dynamic information
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(params.eventName);
		}, 100);
	});
	const capitalizedTitle = (title as string).charAt(0).toUpperCase() + (title as string).slice(1);

	return {
		title: capitalizedTitle,
	};
};

type FolderImages = {
	folderName: string;
	images: string[];
};

function getFolderImages(eventName: string): FolderImages[] {
	const eventDirectory = path.join(process.cwd(), 'public', 'images', 'gallery', eventName);
	const folders = fs
		.readdirSync(eventDirectory, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	return folders.map((folderName) => {
		const folderPath = path.join(eventDirectory, folderName);
		const images = fs.readdirSync(folderPath).filter((file) => !fs.lstatSync(path.join(folderPath, file)).isDirectory());
		return { folderName, images };
	});
}

export default function EventPage({ params }: Props) {
	const eventNames = ['competitions', 'festivals', 'celebrations'];
	if (!eventNames.includes(params.eventName)) {
		return notFound(); // Render the notFound component
	}
	const folderImages = getFolderImages(params.eventName);
	return (
		<>
			<Separator className="h-0.5 bg-black" />

			{folderImages.map((folder, folderIndex) => (
				<div key={folderIndex} className="my-3">
					<div className="text-headingColor text-center font-bold text-3xl max-md:text-2xl">{folder.folderName}</div>
					<div className="flex flex-wrap mx-auto gap-4 justify-center mt-2 max-md:gap-3">
						{folder.images.map((image, imageIndex) => (
							<div key={imageIndex} className="relative w-1/6 h-80 max-md:w-1/4 max-md:h-44">
								<Image
									src={`/images/gallery/${params.eventName}/${folder.folderName}/${image}`}
									alt={`Image ${imageIndex}`}
									blurDataURL={`/images/gallery/${params.eventName}/${folder.folderName}/small/${image}`}
									placeholder="blur"
									fill
									className="object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
}

export async function generateStaticParams() {
	const eventNames = ['competitions', 'festivals', 'celebrations'];
	return eventNames.map((eventName) => ({
		eventName,
	}));
}
