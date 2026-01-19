import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	reactCompiler: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
