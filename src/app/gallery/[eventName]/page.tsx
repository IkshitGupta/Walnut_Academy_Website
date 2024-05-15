import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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

export default function ClassName({ params }: Props) {
	const validClassNames = ['competitions', 'festivals', 'celebrations'];
	if (!validClassNames.includes(params.eventName)) {
		return notFound(); // Render the notFound component
	}
	return <h1>Details about {params.eventName}</h1>;
}
