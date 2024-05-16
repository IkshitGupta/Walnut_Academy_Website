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
			<NavigationMenuList className="text-lg p-3 text-cyan-950 mr-2">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-500">HOME</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/admission" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-500">ADMISSION</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="relative group/a">
					<NavigationMenuTrigger>GALLERY</NavigationMenuTrigger>
					<NavigationMenuList className="group-hover/a:visible invisible absolute">
						<div className="flex flex-col justify-start items-start mt-2">
							<div>
								<Link href="/gallery/festivals" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-teal-500">Festivals</NavigationMenuLink>
								</Link>
							</div>
							<div>
								<Link href="/gallery/celebrations" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-teal-500">Celebrations</NavigationMenuLink>
								</Link>
							</div>
							<div>
								<Link href="/gallery/competitions" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-teal-500">Competitions</NavigationMenuLink>
								</Link>
							</div>
						</div>
					</NavigationMenuList>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-teal-400">CONTACT US</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuIndicator />
			<NavigationMenuViewport />
		</NavigationMenu>
	);
};

export default MyNavigationMenu;
