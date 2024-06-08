'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/');
		}, 3000);
		return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
	}, [router]);

	return <h1>Page not found</h1>;
}
