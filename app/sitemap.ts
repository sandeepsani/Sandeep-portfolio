import type { MetadataRoute } from 'next';

const baseUrl = 'https://sandeepkairamkonda.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		'',
		'#skills',
		'#experience',
		'#case-studies',
		'#education',
		'#contact',
	].map((route) => ({
		url: `${baseUrl}/${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return routes;
}
