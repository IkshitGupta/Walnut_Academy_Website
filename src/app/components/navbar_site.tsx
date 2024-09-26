"use client";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import MobileNavbar from "./navbar_mobile";

const MyNavigationMenu = () => {
	const hoverBorder = "hover:border-2 hover:border-hoverLink px-4 py-0";
	return (
		<NavigationMenu className="max-w-full justify-between">
			{/* Mobile Navbar */}
			<MobileNavbar />

			{/* Logo Section */}
			<div className="m-2 ml-5">
				<Link href="/" aria-label="Homepage" className="flex md:space-x-2 items-center">
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={75} height={0} quality={100} priority className="aspect-square max-md:hidden" />
					<Image src="/images/LOGO.jpg" alt="Website Logo" width={60} height={0} quality={100} priority className="aspect-square md:hidden" />
					<div className="text-right">
						<div className="text-4xl max-md:text-2xl/5 max-md:font-semibold">Walnut Academy</div>
						<div>Mansarovar, Jaipur</div>
						<div className="text-xs/3 text-red-800 max-md:font-extralight">
							<div>Organized by Shri Sanjivani Shiksha Samiti</div>
							<div>Affiliated to R.B.S.E., Affiliation No. RJJAI27726</div>
						</div>
					</div>
				</Link>
			</div>

			{/* Navigation Links */}
			<NavigationMenuList className="text-lg p-3 text-navColor mr-10 font-medium max-md:hidden">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={`hover:text-hoverLink ${hoverBorder}`}>HOME</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				{/* Gallery Dropdown */}
				<NavigationMenuItem className={`relative group/a ${hoverBorder}`}>
					<NavigationMenuTrigger>GALLERY</NavigationMenuTrigger>
					<NavigationMenuList className="group-hover/a:visible invisible absolute -left-5">
						<div className="flex flex-col justify-start items-start mt-2 bg-[#FFFDD0]/80 pl-4 pr-2">
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

				{/* Contact Us */}
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
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
