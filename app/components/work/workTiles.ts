export type WorkTile = {
	title: string;
	description: string;
	image: {
		src: string;
		width: number;
		height: number;
	};
};

export const workTiles: WorkTile[] = [
	{
		description: `Here are projects`,
		title: `I've architected`,
		image: {
			src: '/static/images/payment-api.png',
			width: 600,
			height: 600,
		},
	},
	{
		description: 'I built',
		title: 'Payment API System',
		image: {
			src: '/static/images/payment-api.png',
			width: 600,
			height: 600,
		},
	},
	{
		description: `I architected`,
		title: 'Kubernetes Platform',
		image: {
			src: '/static/images/kubernetes.png',
			width: 600,
			height: 600,
		},
	},
	{
		description: `I designed`,
		title: 'Serverless Pipeline',
		image: {
			src: '/static/images/serverless.png',
			width: 600,
			height: 600,
		},
	},
];
