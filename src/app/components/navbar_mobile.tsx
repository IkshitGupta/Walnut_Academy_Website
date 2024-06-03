'use client';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import * as React from 'react';
import { Separator } from '@/components/ui/separator';

const MyMobileNavbar = () => {
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
				<DropdownMenuTrigger>
					<Image src="/icons/menu.svg" alt="Menu Icon" width={45} height={0} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="py-3 text-navColor font-medium opacity-90">
					<DropdownMenuItem className="text-xl">
						<Link href="/" onClick={handleLinkClick}>
							HOME
						</Link>
					</DropdownMenuItem>
					<Separator className="h-1" />

					{/* <DropdownMenuItem className="text-xl">
						<Link href="/admission" onClick={handleLinkClick}>
							ADMISSION
						</Link>
					</DropdownMenuItem> */}
					<Separator className="h-1" />

					{/* Gallery */}
					<DropdownMenuItem className="text-xl">
						<Collapsible onOpenChange={setIsCollapsibleOpen} open={isCollapsibleOpen}>
							<CollapsibleTrigger onClick={handleCollapsibleTriggerClick} className="flex justify-between items-center">
								<div>GALLERY</div>
								<Image src="/icons/down-arrow.svg" alt="Down Icon" width={25} height={0} />
							</CollapsibleTrigger>
							<CollapsibleContent className="flex flex-col text-[#333333]">
								<Link href="/gallery/festivals" onClick={handleLinkClick}>
									Festivals
								</Link>
								<Separator className="bg-navColor" />
								<Link href="/gallery/celebrations" onClick={handleLinkClick}>
									Celebrations
								</Link>
								<Separator className="bg-navColor" />
								<Link href="/gallery/competitions" onClick={handleLinkClick}>
									Competitions
								</Link>
								<Separator className="bg-navColor" />
							</CollapsibleContent>
						</Collapsible>
					</DropdownMenuItem>
					<Separator className="h-1" />

					<DropdownMenuItem className="text-xl">
						<Link href="/contact" onClick={handleLinkClick}>
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
