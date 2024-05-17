import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
export const metadata = {
	title: 'Walnut Academy',
};
export default function Home() {
	return (
		<>
			<div className="h-[33rem] relative m-1">
				<Image src="/images/building.jpg" alt="School Building" fill priority blurDataURL='/images/building-small.jpg' placeholder='blur'/>
			</div>
			<Separator />
		</>
	);
}
