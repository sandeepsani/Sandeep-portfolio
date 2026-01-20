export type WorkTile = {
	title: string;
	description: string;
	image: {
		src: string;
		width: number;
		height: number;
	};
	links?: {
		demo: string;
		github: string;
	};
};

export const workTiles: WorkTile[] = [
	{
		description: `Distributed System`,
		title: 'Real-Time Event Streaming',
		image: {
			src: '/static/images/event-streaming.png',
			width: 600,
			height: 600,
		},
		links: {
			demo: 'https://real-time-event-streaming-platform-beta.vercel.app/',
			github: 'https://github.com/sandeepsani/Real-Time-Event-Streaming-Platform',
		},
	},
	{
		description: 'ML-Powered Fraud Detection',
		title: 'Healthcare Claims Analyzer',
		image: {
			src: '/static/images/healthcare-claims.png',
			width: 600,
			height: 600,
		},
		links: {
			demo: 'https://healthcare-claims-analyzer-eta.vercel.app/',
			github: 'https://github.com/sandeepsani/Healthcare-Claims-Analyzer',
		},
	},
	{
		description: `AI-Driven Code Analysis`,
		title: 'Smart Code Review Assistant',
		image: {
			src: '/static/images/smart-code-review.png',
			width: 600,
			height: 600,
		},
		links: {
			demo: 'https://smart-code-review-assistant-woad.vercel.app/',
			github: 'https://github.com/sandeepsani/smart-code-review-assistant',
		},
	},
];
