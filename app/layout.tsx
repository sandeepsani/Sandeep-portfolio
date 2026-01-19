import Analytics from 'app/components/analytics/analytics';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { inter, playfair } from './fonts';
import './tailwind.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Sandeep Kairamkonda',
		default: 'Sandeep Kairamkonda | Senior Backend Engineer',
	},
	description: 'Senior Backend Software Engineer with 5 years experience in distributed systems, processing 2.1M+ daily requests and $8.3M+ monthly transactions. Expert in Java, AWS, Kubernetes.',
	metadataBase: new URL('https://sandeepkairamkonda.vercel.app'),
	keywords: ['Software Engineer', 'Backend Developer', 'Java', 'AWS', 'Kubernetes', 'Microservices', 'Distributed Systems'],
	authors: [{ name: 'Sandeep Kairamkonda' }],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: 'Sandeep Kairamkonda | Senior Backend Engineer',
		description: 'Architecting high-scale backend systems that power millions of daily requests.',
		siteName: 'Sandeep Kairamkonda Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sandeep Kairamkonda | Senior Backend Engineer',
		description: 'Architecting high-scale backend systems that power millions of daily requests.',
	},
	robots: {
		index: true,
		follow: true,
	},
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning className={`${inter.className} ${playfair.variable}`}>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/static/favicons/favicon.ico'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/static/favicons/favicon.ico'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/static/favicons/favicon.ico'
				/>
				<meta name='msapplication-TileColor' content='#14c8c8' />
				<meta name='theme-color' content='#0a0a0a' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
			</head>
			<body className='bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					themes={['dark', 'light']}
				>
					<LenisProvider>
						<ThemeSwitch />
						{children}
					</LenisProvider>
					{process.env.NODE_ENV === 'production' && <Analytics />}
				</ThemeProvider>
			</body>
		</html>
	);
}
