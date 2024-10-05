"use client";

import Image from "next/image";
import CustomWelcome from "./components/welcome";
import Team from "./components/walnut_team";
import RoomGallery from "./components/room_gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants for sections and images
const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInZoom = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function Home() {
	const welcomeRef = useRef(null);
	const teamRef = useRef(null);
	const galleryRef = useRef(null);

	// Detect when each section enters the viewport
	const isWelcomeInView = useInView(welcomeRef, { once: true });
	const isTeamInView = useInView(teamRef, { once: true });
	const isGalleryInView = useInView(galleryRef, { once: true });

	return (
		<div>
			{/* School building banner with aspect ratio and fadeInZoom effect */}
			<motion.div initial="hidden" animate="visible" variants={fadeInZoom}>
				<AspectRatio ratio={11 / 5}>
					<Image src="/images/building.jpg" alt="School Building" priority blurDataURL="/images/building-small.jpg" placeholder="blur" fill />
				</AspectRatio>
			</motion.div>

			{/* Welcome Section with fade-in-up animation */}
			<motion.div ref={welcomeRef} initial="hidden" animate={isWelcomeInView ? "visible" : "hidden"} variants={fadeInUp}>
				<CustomWelcome />
			</motion.div>

			{/* Team Section with fade-in-up animation */}
			<motion.div ref={teamRef} initial="hidden" animate={isTeamInView ? "visible" : "hidden"} variants={fadeInUp}>
				<Team />
			</motion.div>

			{/* Room Gallery Section with fade-in-up animation */}
			<motion.div ref={galleryRef} initial="hidden" animate={isGalleryInView ? "visible" : "hidden"} variants={fadeInUp}>
				<RoomGallery />
			</motion.div>
		</div>
	);
}
