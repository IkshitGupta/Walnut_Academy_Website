"use client";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import * as React from "react";
import { Separator } from "@/components/ui/separator";

const MyMobileNavbar: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);

	const handleDropdownChange = (open: boolean) => {
		setIsDropdownOpen(open);
		if (!open) {
			setIsCollapsibleOpen(false); // Close collapsible when dropdown closes
		}
	};

	const handleCollapsibleTriggerClick = (event: React.PointerEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setIsCollapsibleOpen(!isCollapsibleOpen);
	};

	const handleLinkClick = () => {
		setIsDropdownOpen(false);
		setIsCollapsibleOpen(false);
	};

	return (
		<div className="md:hidden">
			<DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownChange}>
				<DropdownMenuTrigger aria-expanded={isDropdownOpen} aria-label="Open menu">
					<Image src="/icons/menu.svg" alt="Menu Icon" width={35} height={35} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="py-3 text-navColor font-medium opacity-90 transition duration-300">
					{/* Home Link */}
					<DropdownMenuItem className="text-lg hover:text-blue-500">
						<Link href="/" onClick={handleLinkClick} prefetch={false}>
							HOME
						</Link>
					</DropdownMenuItem>
					<Separator className="h-1" />

					{/* Gallery Section */}
					<DropdownMenuItem className="text-lg hover:text-blue-500">
						<Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
							<CollapsibleTrigger onClick={handleCollapsibleTriggerClick} className="flex justify-between items-center" aria-expanded={isCollapsibleOpen}>
								<div>GALLERY</div>
								<Image src="/icons/down-arrow.svg" alt="Expand Gallery" width={25} height={25} />
							</CollapsibleTrigger>
							<CollapsibleContent className="flex flex-col text-[#333333] space-y-2">
								<Link href="/gallery/festivals" onClick={handleLinkClick} className="hover:text-blue-500" prefetch={false}>
									Festivals
								</Link>
								<Separator className="bg-navColor" />
								<Link href="/gallery/celebrations" onClick={handleLinkClick} className="hover:text-blue-500" prefetch={false}>
									Celebrations
								</Link>
								<Separator className="bg-navColor" />
								<Link href="/gallery/competitions" onClick={handleLinkClick} className="hover:text-blue-500" prefetch={false}>
									Competitions
								</Link>
								<Separator className="bg-navColor" />
							</CollapsibleContent>
						</Collapsible>
					</DropdownMenuItem>
					<Separator className="h-1" />

					{/* Contact Us Link */}
					<DropdownMenuItem className="text-lg hover:text-blue-500">
						<Link href="/contact" onClick={handleLinkClick} prefetch={false}>
							CONTACT US
						</Link>
					</DropdownMenuItem>
					<Separator className="h-1" />
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MyMobileNavbar;
