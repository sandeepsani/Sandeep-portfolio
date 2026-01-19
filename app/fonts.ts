import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const playfair = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	variable: '--font-playfair',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

// Legacy exports for compatibility
export const mukta = inter;
export const merryWeather = playfair;
