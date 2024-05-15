'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu';

const MyNavigationMenu = () => {
	return (
		<NavigationMenu className="max-w-full justify-between">
			<div className="m-3">
				<Link href="/" className="flex space-x-2 items-center">
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={65} height={0} />
					<div className="text-right">
						<div className="text-4xl">Walnut Academy</div>
						<div>Mansarovar, Jaipur</div>
					</div>
				</Link>
			</div>
			<NavigationMenuList className="text-lg p-3 text-cyan-950">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-400">Home</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/admission" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-400">Admission</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="relative">
					<NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
					<NavigationMenuContent className="flex flex-col items-center bg-slate-700 absolute">
						<div>
							<Link href="/gallery/festivals" legacyBehavior passHref>
								<NavigationMenuLink className="hover:text-teal-400">Festivals</NavigationMenuLink>
							</Link>
						</div>
						<div>
							<Link href="/gallery/celebrations" legacyBehavior passHref>
								<NavigationMenuLink className="hover:text-teal-400">Celebrations</NavigationMenuLink>
							</Link>
						</div>
						<div>
							<Link href="/gallery/competitions" legacyBehavior passHref>
								<NavigationMenuLink className="hover:text-teal-400">Competitions</NavigationMenuLink>
							</Link>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-400">Contact Us</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			{/* <NavigationMenuIndicator />
			<NavigationMenuViewport /> */}
		</NavigationMenu>
	);
};

export default MyNavigationMenu;
