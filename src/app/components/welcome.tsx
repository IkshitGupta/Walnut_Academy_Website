'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const WelcomeDesc = () => {
	return (
		<>
			<div className="flex mt-10 justify-between gap-10">
				{/* About Section */}
				<Card className="w-3/5 ml-5 border-blue-900 border-4 bg-[#FADFB3]">
					<CardHeader>
						<CardTitle className="text-4xl">Welcome to Walnut Academy</CardTitle>
						<CardDescription>Motto</CardDescription>
					</CardHeader>
					<CardContent>C1</CardContent>
				</Card>

				<Separator orientation="vertical" />

				{/* Timings Section */}
				<Card className="w-2/5 text-center mr-5 border-blue-900 border-4 bg-[#FADFB3]">
					<CardHeader>
						<CardTitle className="text-3xl">Timings</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-between">
						<div className="w-1/2 border-blue-900 border-r-2">
							<div className="font-semibold text-xl font-mono">Office Hours</div>
							<div className="text-lg">8:30 a.m. to 02:30 p.m.</div>
						</div>
						<Separator orientation="vertical" />
						<div className="w-1/2">
							<div className="font-semibold text-xl font-mono">Class Hours</div>
							<div className="text-lg">8:30 a.m. to 01:30 p.m.</div>
						</div>
					</CardContent>
					<CardFooter className="justify-center flex font-semibold text-lg">Note: Every second Saturday is a holiday for the school.</CardFooter>
				</Card>
			</div>
		</>
	);
};
export default WelcomeDesc;
