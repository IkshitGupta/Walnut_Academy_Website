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
				<DropdownMenuTrigger aria-expanded={isDropdownOpen} aria-label="Open menu" aria-haspopup="true">
					<Image src="/icons/menu.svg" alt="Menu Icon" width={35} height={35} />
				</DropdownMenuTrigger>

				<DropdownMenuContent className="py-3 px-4 rounded-md shadow-lg text-navColor font-medium opacity-90 transition duration-300 space-y-2" role="menu">
					{/* Home Link */}
					<DropdownMenuItem className="text-lg hover:text-blue-500 transition-colors" role="menuitem">
						<Link href="/" onClick={handleLinkClick} prefetch={false}>
							HOME
						</Link>
					</DropdownMenuItem>
					<Separator className="bg-gray-300 h-0.5" />

					{/* Gallery Section */}
					<DropdownMenuItem className="text-lg">
						<Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
							<CollapsibleTrigger onClick={handleCollapsibleTriggerClick} className="flex justify-between items-center py-2 transition-colors hover:text-blue-500" aria-expanded={isCollapsibleOpen}>
								<span>GALLERY</span>
								<Image src="/icons/down-arrow.svg" alt="Expand Gallery" width={20} height={20} />
							</CollapsibleTrigger>
							<CollapsibleContent className="flex flex-col text-[#333333] space-y-2 pl-4">
								<Link href="/gallery/festivals" onClick={handleLinkClick} className="hover:text-blue-500 transition-colors" prefetch={false}>
									Festivals
								</Link>
								<Link href="/gallery/celebrations" onClick={handleLinkClick} className="hover:text-blue-500 transition-colors" prefetch={false}>
									Celebrations
								</Link>
								<Link href="/gallery/competitions" onClick={handleLinkClick} className="hover:text-blue-500 transition-colors" prefetch={false}>
									Competitions
								</Link>
							</CollapsibleContent>
						</Collapsible>
					</DropdownMenuItem>
					<Separator className="bg-gray-300 h-0.5" />

					{/* Contact Us Link */}
					<DropdownMenuItem className="text-lg hover:text-blue-500 transition-colors" role="menuitem">
						<Link href="/contact" onClick={handleLinkClick} prefetch={false}>
							CONTACT US
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MyMobileNavbar;
