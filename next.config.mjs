/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'walnut-academy-website.vercel.app',
		  pathname: '/**',
		},
	  ],
	  formats: ['image/avif', 'image/webp'], // Enable AVIF and WebP formats
	},
  };
  
  export default nextConfig;  