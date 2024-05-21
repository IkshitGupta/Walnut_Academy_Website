'use client';
import Link from 'next/link';
import Image from 'next/image';

const MyHeader = () => {
	return (
		<div className="bg-blue-900 h-16 flex justify-between items-center">
			<div className="ml-32 text-2xl animate-admission-color text-white font-mono">Admission Open From Class Play Group to Class Eighth</div>
			<div className="flex space-x-2 mr-2">
				<Link href="https://www.facebook.com/profile.php?id=100057252888320" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/facebook-white.svg" alt="Walnut Academy Facebook" width={45} height={0} />
				</Link>
				<Link href="https://www.youtube.com/@walnutacademy2017" rel="noopener noreferrer" target="_blank">
					<Image src="/icons/youtube-white.svg" alt="Walnut Academy YouTube" width={45} height={0} />
				</Link>
			</div>
		</div>
	);
};
export default MyHeader;
