"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
	// Animation Variants
	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
	};

	const hoverEffect = {
		hover: {
			scale: 1.05, // Slightly scale up on hover
			transition: { duration: 0.3, ease: "easeInOut" },
		},
	};

	return (
		<>
			<Separator className="h-0.5 bg-gray-300" />

			<div className="flex flex-col items-center mx-auto mt-10 gap-y-10 max-md:ml-5 max-md:mt-5 px-5">
				{/* Heading */}
				<motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center text-5xl font-bold text-headingColor mb-8 max-md:text-3xl">
					Contact Us
				</motion.div>

				{/* Contact Details */}
				<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto">
					<div className="space-y-6">
						{/* Address Section */}
						<motion.div className="flex items-start gap-4" whileHover="hover" variants={hoverEffect}>
							<Image src="/icons/location.svg" alt="Location Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Address</div>
								<address className="text-lg text-gray-700 not-italic">Walnut Academy, 175, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</address>
							</div>
						</motion.div>

						{/* Phone Section */}
						<motion.div className="flex items-start gap-4" whileHover="hover" variants={hoverEffect}>
							<Image src="/icons/phone.svg" alt="Phone Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Contact No.</div>
								<div className="text-lg text-gray-700">+91 9694853435</div>
							</div>
						</motion.div>

						{/* Email Section */}
						<motion.div className="flex items-start gap-4" whileHover="hover" variants={hoverEffect}>
							<Image src="/icons/mail.svg" alt="Email Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Mail</div>
								<div className="text-lg text-gray-700">walnutacademy2017@gmail.com</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Google Maps Iframe */}
				<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="w-full max-w-4xl mx-auto">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7119.1143257538515!2d75.75101909305691!3d26.85403385672843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50bbe07d97d%3A0x2a5ea0f15e1ef9ad!2sWalnut%20Academy!5e0!3m2!1sen!2sin!4v1716359734392!5m2!1sen!2sin" className="w-full h-96 rounded-lg shadow-md border border-gray-200" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Walnut Academy Location on Google Maps"></iframe>
				</motion.div>
			</div>
		</>
	);
}
