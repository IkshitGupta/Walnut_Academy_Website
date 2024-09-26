import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata = {
	title: "Contact Us",
};

export default function Contact() {
	return (
		<>
			<Separator className="h-0.5 bg-black" />
			<div className="flex ml-10 mt-10 items-center mx-auto gap-x-10 flex-wrap gap-y-5 max-md:ml-5">
				{/* Contact Details */}
				<div>
					<div className="text-headingColor font-bold text-4xl max-md:text-2xl"> Contact Us </div>

					{/* Address Section */}
					<div className="flex gap-4 mt-5 items-center">
						<Image src="/icons/location.svg" alt="Location Icon" width={25} height={0} className="max-md:hidden" />
						<Image src="/icons/location.svg" alt="Location Icon" width={20} height={0} className="md:hidden" />
						<div className="md:text-xl font-semibold">Address</div>
					</div>
					<address className="text-lg max-md:text-sm not-italic">Walnut Academy, 175, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</address>

					{/* Phone Section */}
					<div className="flex gap-4 mt-5 items-center max-md:mt-2">
						<Image src="/icons/phone.svg" alt="Phone Icon" width={25} height={0} className="max-md:hidden" />
						<Image src="/icons/phone.svg" alt="Phone Icon" width={20} height={0} className="md:hidden" />
						<div className="md:text-xl font-semibold">Contact No.</div>
					</div>
					<div className="md:text-lg max-md:text-sm">+91 9694853435</div>

					{/* Email Section */}
					<div className="flex gap-4 mt-5 items-center max-md:mt-2">
						<Image src="/icons/mail.svg" alt="Email Icon" width={25} height={0} className="max-md:hidden" />
						<Image src="/icons/mail.svg" alt="Email Icon" width={20} height={0} className="md:hidden" />
						<div className="md:text-xl font-semibold">Mail</div>
					</div>
					<div className="md:text-lg max-md:text-sm">walnutacademy2017@gmail.com</div>
				</div>

				{/* Google Maps Iframe */}
				<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7119.1143257538515!2d75.75101909305691!3d26.85403385672843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50bbe07d97d%3A0x2a5ea0f15e1ef9ad!2sWalnut%20Academy!5e0!3m2!1sen!2sin!4v1716359734392!5m2!1sen!2sin" className="w-[600px] h-[500px] max-md:w-full max-md:h-[250px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Walnut Academy Location on Google Maps"></iframe>
				</div>
			</div>
		</>
	);
}
