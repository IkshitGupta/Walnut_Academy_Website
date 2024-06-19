/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
	images: {
		domains: ['walnut-academy-website.vercel.app'], // Add your domain here
		formats: ['image/avif', 'image/webp'], // Enable AVIF and WebP formats
	},
};

export default nextConfig;
