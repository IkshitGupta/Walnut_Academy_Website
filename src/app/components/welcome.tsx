'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const WelcomeDesc = () => {
	return (
		<>
			<div className="flex mt-10 justify-center gap-x-16 gap-y-4 flex-wrap max-md:mt-5">
				{/* About Section */}
				<Card className="md:w-3/6 border-blue-900 border-4 bg-[#FADFB3] max-md:mx-5">
					<CardHeader>
						<CardTitle className="md:text-4xl">Welcome to Walnut Academy</CardTitle>
						<CardDescription> Enter the world of learning with fun and joy. </CardDescription>
					</CardHeader>
					<CardContent className="text-justify">
						{' '}
						Walnut Academy provides a child-friendly, safe, secure, caring, and stimulating environment. Here, we will nurture your child and provide them with a quality education. At Walnut
						Academy, our firm belief about teaching is "learning by playing, doing, and in an interactive way." Hence, we have designed our ambiance, curriculum, activities, teaching aids,
						toys, and equipment in a fun-loving manner.
					</CardContent>
				</Card>

				<Separator orientation="vertical" className="bg-red-500 w-0.5 h-auto max-md:hidden" />

				{/* Timings Section */}
				<Card className="md:w-2/6 text-center border-blue-900 border-4 bg-[#FADFB3] max-md:mx-5">
					<CardHeader>
						<CardTitle className="md:text-3xl">Timings</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-between">
						<div className="w-1/2">
							<div className="font-semibold text-xl max-md:text-lg"> Office Hours </div>
							<div className="md:text-lg">8:30 a.m. to 02:30 p.m.</div>
						</div>
						<Separator orientation="vertical" className="bg-blue-900 w-0.5 h-auto mx-2" />
						<div className="w-1/2">
							<div className="font-semibold text-xl max-md:text-lg"> Class Hours </div>
							<div className="md:text-lg">8:30 a.m. to 01:30 p.m.</div>
						</div>
					</CardContent>
					<CardFooter className="justify-center flex font-semibold md:text-lg">Note: Every second Saturday is a holiday for the school.</CardFooter>
				</Card>
			</div>
		</>
	);
};
export default WelcomeDesc;
