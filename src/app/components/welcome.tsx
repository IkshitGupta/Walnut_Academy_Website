"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const WelcomeDesc = () => {
	return (
		<>
			<div className="flex mt-10 justify-center gap-x-16 gap-y-8 flex-wrap max-md:mt-5 items-center">
				{/* About Section */}
				<div className="md:w-3/6 max-md:mx-5">
					<Card className="border-blue-900 border-4 bg-gradient-to-br from-[#FFF7D4] to-[#FADFB3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
						<CardHeader className="pb-4">
							<CardTitle className="text-4xl max-md:text-2xl text-blue-900">Welcome to Walnut Academy</CardTitle>
							<CardDescription className="md:text-lg text-blue-700">A Foundation For The Future</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-justify font-medium text-lg max-md:text-sm text-gray-800 leading-relaxed">Walnut Academy provides a child-friendly, safe, secure, caring, and stimulating environment where we nurture your child and provide them with a quality education. At Walnut Academy, we firmly believe that teaching should involve learning through play, hands-on activities, and interactive experiences. Therefore, we have carefully designed our ambiance, curriculum, activities and teaching aids to foster a fun and engaging learning atmosphere.</p>
						</CardContent>
					</Card>
				</div>

				{/* Timings Section */}
				<div className="md:w-2/6 max-md:mx-5">
					<Card className="text-center border-blue-900 border-4 bg-gradient-to-br from-[#FFF7D4] to-[#FADFB3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
						<CardHeader>
							<CardTitle className="text-3xl max-md:text-xl text-blue-900">Timings</CardTitle>
						</CardHeader>
						<CardContent className="flex justify-between max-md:flex-col max-md:gap-4">
							<div className="w-1/2 max-md:w-full">
								<div className="font-semibold text-xl max-md:text-lg text-blue-800">Office Hours</div>
								<div className="md:text-lg max-md:text-sm text-gray-700">8:30 a.m. to 02:30 p.m.</div>
							</div>
							<Separator orientation="vertical" className="bg-blue-900 w-0.5 h-auto mx-2 max-md:hidden" />
							<div className="w-1/2 max-md:w-full">
								<div className="font-semibold text-xl max-md:text-lg text-blue-800">Class Hours</div>
								<div className="md:text-lg max-md:text-sm text-gray-700">8:30 a.m. to 01:30 p.m.</div>
							</div>
						</CardContent>
						<CardFooter className="justify-center flex font-semibold md:text-lg max-md:text-sm text-red-700">Note: Every second Saturday is a holiday for the students.</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default WelcomeDesc;
