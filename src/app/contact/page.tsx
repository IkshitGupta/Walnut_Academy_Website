import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
	title: 'Contact Us',
};
export default function Contact() {
	return (
		<>
			<div className="flex ml-10 mt-10 items-center mx-auto gap-10">
				<div>
					<div className="text-headingColor font-bold text-4xl">Contact Us</div>

					<div className="flex gap-4 mt-5">
						<Image src="/icons/location.svg" alt="Address Icon" width={25} height={0} />
						<div className="text-xl">Address</div>
					</div>
					<div className="text-lg">Walnut Academy, 175-176, Prajapati Vihar, Mansarovar, Jaipur, Rajasthan-302020</div>

					<div className="flex gap-4 mt-5">
						<Image src="/icons/phone.svg" alt="Phone Icon" width={25} height={0} />
						<div className="text-xl">Contact No.</div>
					</div>
					<div className="text-lg">+91 9694853435</div>

					<div className="flex gap-4 mt-5">
						<Image src="/icons/mail.svg" alt="Mail Icon" width={25} height={0} />
						<div className="text-xl">Mail</div>
					</div>
					<div className="text-lg">walnutacademy2017@gmail.com</div>
				</div>

				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7119.1143257538515!2d75.75101909305691!3d26.85403385672843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50bbe07d97d%3A0x2a5ea0f15e1ef9ad!2sWalnut%20Academy!5e0!3m2!1sen!2sin!4v1716359734392!5m2!1sen!2sin"
						className="w-[600px] h-[500px]"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	);
}
