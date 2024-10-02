import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata = {
	title: "Contact Us",
};

export default function Contact() {
	return (
		<>
			<Separator className="h-0.5 bg-gray-300" />

			<div className="flex flex-col items-center mx-auto mt-10 gap-y-10 max-md:ml-5 max-md:mt-5 px-5">
				{/* Heading */}
				<div className="text-center text-5xl font-bold text-headingColor mb-8 max-md:text-3xl">Contact Us</div>

				{/* Contact Details */}
				<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto">
					<div className="space-y-6">
						{/* Address Section */}
						<div className="flex items-start gap-4">
							<Image src="/icons/location.svg" alt="Location Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Address</div>
								<address className="text-lg text-gray-700 not-italic">Walnut Academy, 175, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</address>
							</div>
						</div>

						{/* Phone Section */}
						<div className="flex items-start gap-4">
							<Image src="/icons/phone.svg" alt="Phone Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Contact No.</div>
								<div className="text-lg text-gray-700">+91 9694853435</div>
							</div>
						</div>

						{/* Email Section */}
						<div className="flex items-start gap-4">
							<Image src="/icons/mail.svg" alt="Email Icon" width={30} height={0} className="w-8 h-8 text-primaryColor" />
							<div>
								<div className="text-xl font-semibold text-primaryColor">Mail</div>
								<div className="text-lg text-gray-700">walnutacademy2017@gmail.com</div>
							</div>
						</div>
					</div>
				</div>

				{/* Google Maps Iframe */}
				<div className="w-full max-w-4xl mx-auto">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7119.1143257538515!2d75.75101909305691!3d26.85403385672843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50bbe07d97d%3A0x2a5ea0f15e1ef9ad!2sWalnut%20Academy!5e0!3m2!1sen!2sin!4v1716359734392!5m2!1sen!2sin" className="w-full h-96 rounded-lg shadow-md border border-gray-200" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Walnut Academy Location on Google Maps"></iframe>
				</div>
			</div>
		</>
	);
}
