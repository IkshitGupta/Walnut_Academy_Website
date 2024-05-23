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

	return (
		<div className="">
			<DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownChange}>
				<DropdownMenuTrigger>
					<Image src="/icons/menu.svg" alt="Menu Icon" width={45} height={0} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="text-lg py-3 text-navColor font-medium">
					<DropdownMenuItem>
						<Link href="/">HOME</Link>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Link href="/admission">ADMISSION</Link>
					</DropdownMenuItem>

					{/* Gallery */}
					<DropdownMenuItem>
						<Collapsible onOpenChange={setIsCollapsibleOpen} open={isCollapsibleOpen}>
							<CollapsibleTrigger onClick={handleCollapsibleTriggerClick} className="flex justify-between items-center">
								<div>GALLERY</div>
								<Image src="/icons/down-arrow.svg" alt="Down Icon" width={25} height={0} />
							</CollapsibleTrigger>
							<CollapsibleContent className="flex flex-col text-[#333333]">
								<Link href="/gallery/festivals">Festivals</Link>
								<Separator className='bg-navColor'/>
								<Link href="/gallery/celebrations">Celebrations</Link>
								<Separator className='bg-navColor'/>
								<Link href="/gallery/competitions">Competitions</Link>
								<Separator className='bg-navColor'/>
							</CollapsibleContent>
						</Collapsible>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<Link href="/contact">CONTACT US</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MyMobileNavbar;
