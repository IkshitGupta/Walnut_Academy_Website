import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import CustomWelcome from "./components/welcome";
import Team from "./components/walnut_team";
import RoomGallery from "./components/room_gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata = {
	title: "Walnut Academy",
	description: "Welcome to Walnut Academy, a premier institution offering excellent education in Mansarovar, Jaipur.",
};

export default function Home() {
	return (
		<>
			{/* School building banner with aspect ratio */}
			<AspectRatio ratio={11 / 5}>
				<Image src="/images/building.jpg" alt="School Building" priority blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
			</AspectRatio>

			{/* Welcome Section */}
			<CustomWelcome />
			{/* You can uncomment the separator if needed */}
			{/* <Separator /> */}

			{/* Team Section */}
			<Team />
			{/* <Separator /> */}

			{/* Room Gallery Section */}
			<RoomGallery />
			{/* <Separator /> */}
		</>
	);
}
