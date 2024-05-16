'use client';
import Link from 'next/link';
import Image from 'next/image';

const MyHeader = () => {
	return (
		<div className="bg-blue-900 h-16 flex justify-between items-center">
			<div className="ml-32 text-2xl text-white">Admission Open From Class Play Group to Class Fifth</div>
			<div className="flex space-x-2">
				<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/facebook.svg" alt="Walnut Academy Facebook" width={45} height={0} />
				</Link>
				<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/youtube.svg" alt="Walnut Academy YouTube" width={45} height={10} />
				</Link>
			</div>
		</div>
	);
};
export default MyHeader;
