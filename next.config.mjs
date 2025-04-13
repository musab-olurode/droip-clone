/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: 'droip.com' }],
	},
};

export default nextConfig;
