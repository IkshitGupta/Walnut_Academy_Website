'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu';

const MyNavigationMenu = () => {
	return (
		<NavigationMenu className="max-w-full justify-between">
			<div className="m-3">
				<Link href="/" className="flex space-x-2 items-center">
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={65} height={0} quality={100} priority />
					<div className="text-right">
						<div className="text-4xl">Walnut Academy</div>
						<div>Mansarovar, Jaipur</div>
					</div>
				</Link>
			</div>
			<NavigationMenuList className="text-lg p-3 text-cyan-950 mr-2 font-medium">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-hoverLink">HOME</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/admission" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-hoverLink">ADMISSION</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="relative group/a">
					<NavigationMenuTrigger>GALLERY</NavigationMenuTrigger>
					<NavigationMenuList className="group-hover/a:visible invisible absolute">
						<div className="flex flex-col justify-start items-start mt-1.5">
							<div>
								<Link href="/gallery/festivals" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-hoverLink">Festivals</NavigationMenuLink>
								</Link>
							</div>
							<div>
								<Link href="/gallery/celebrations" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-hoverLink">Celebrations</NavigationMenuLink>
								</Link>
							</div>
							<div>
								<Link href="/gallery/competitions" legacyBehavior passHref>
									<NavigationMenuLink className="hover:text-hoverLink">Competitions</NavigationMenuLink>
								</Link>
							</div>
						</div>
					</NavigationMenuList>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className="hover:text-hoverLink">CONTACT US</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuIndicator />
			<NavigationMenuViewport />
		</NavigationMenu>
	);
};

export default MyNavigationMenu;
