import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import CustomWelcome from './components/welcome';
import { AspectRatio } from '@/components/ui/aspect-ratio';
export const metadata = {
	title: 'Walnut Academy',
};
export default function Home() {
	return (
		<>
			<AspectRatio ratio={11 / 5}>
				<Image src="/images/building.jpg" alt="School Building" priority blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
			</AspectRatio>

			<Separator />
			<CustomWelcome />
			<Separator />
		</>
	);
}
