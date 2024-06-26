import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import CustomWelcome from './components/welcome';
import Team from './components/walnut_team';
import RoomGallery from './components/room_gallery';
import { AspectRatio } from '@/components/ui/aspect-ratio';
export const metadata = {
	title: 'Walnut Academy',
};
export default function Home() {
	return (
		<>
			<AspectRatio ratio={11 / 5}>
				<Image src="/images/building.jpg" alt="School Building" priority blurDataURL="https://walnut-academy-website.vercel.app/images/building-small.jpg" placeholder="blur" fill />
			</AspectRatio>
			{/* <Separator /> */}

			<CustomWelcome />
			{/* <Separator /> */}

			<Team />
			{/* <Separator /> */}

			<RoomGallery />
			{/* <Separator /> */}
		</>
	);
}
