"use client";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import MobileNavbar from "./navbar_mobile";

const MyNavigationMenu = () => {
	// Reusable hover style with animation
	const hoverBorder = "hover:border-b-2 hover:border-hoverLink px-4 py-2 transition duration-300 ease-in-out";

	return (
		<NavigationMenu className="max-w-full justify-between items-center shadow-lg">
			{/* Mobile Navbar */}
			<MobileNavbar />

			{/* Logo Section */}
			<div className="m-2 ml-5">
				<Link href="/" aria-label="Homepage" className="flex items-center space-x-3" prefetch={false}>
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={75} height={75} quality={100} priority className="aspect-square max-md:hidden" />
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={60} height={60} quality={100} priority className="aspect-square md:hidden" />
					<div className="ml-3">
						<h1 className="text-3xl md:text-4xl font-semibold max-md:text-2xl">Walnut Academy</h1>
						<p className="text-sm md:text-base">Mansarovar, Jaipur</p>
						<p className="text-xs md:text-sm text-red-800">
							<span>Organized by Shri Sanjivani Shiksha Samiti</span>
							<br />
							<span>Affiliated to R.B.S.E., Affiliation No. RJJAI27726</span>
						</p>
					</div>
				</Link>
			</div>

			{/* Navigation Links */}
			<NavigationMenuList className="text-lg space-x-6 text-navColor mr-10 font-medium max-md:hidden">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref prefetch={false}>
						<NavigationMenuLink className={`hover:text-hoverLink ${hoverBorder}`}>HOME</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				{/* Gallery Dropdown */}
				<NavigationMenuItem className="relative group">
					<NavigationMenuTrigger className={`hover:text-hoverLink ${hoverBorder}`}>GALLERY</NavigationMenuTrigger>
					<NavigationMenuList className="absolute z-20 rounded-md shadow-lg mt-2 py-2 transition-all duration-200 opacity-0 group-hover:opacity-100">
						<div className="flex flex-col bg-[#FFFDD0]/80 pl-4 pr-2">
							<Link href="/gallery/festivals" legacyBehavior passHref prefetch={false}>
								<NavigationMenuLink className="py-2 hover:text-hoverLink transition-colors duration-200">Festivals</NavigationMenuLink>
							</Link>
							<Link href="/gallery/celebrations" legacyBehavior passHref prefetch={false}>
								<NavigationMenuLink className="py-2 hover:text-hoverLink transition-colors duration-200">Celebrations</NavigationMenuLink>
							</Link>
							<Link href="/gallery/competitions" legacyBehavior passHref prefetch={false}>
								<NavigationMenuLink className="py-2 hover:text-hoverLink transition-colors duration-200">Competitions</NavigationMenuLink>
							</Link>
						</div>
					</NavigationMenuList>
				</NavigationMenuItem>

				{/* Contact Us */}
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref prefetch={false}>
						<NavigationMenuLink className={`hover:text-hoverLink ${hoverBorder}`}>CONTACT US</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuIndicator />
			<NavigationMenuViewport />
		</NavigationMenu>
	);
};

export default MyNavigationMenu;
