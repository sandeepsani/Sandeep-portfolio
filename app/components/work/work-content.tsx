import Image from 'next/image';
import { WorkContainer } from './work-container';
import { WorkLeft } from './work-left';
import { WorkRight } from './work-right';
import type { WorkTile } from './workTiles';

interface WorkContentProps {
	work: WorkTile;
	progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
	const { title, description, image } = work;

	return (
		<WorkContainer>
			<WorkLeft progress={progress}>
				<div className='text-2xl font-medium md:text-3xl xl:text-4xl'>
					{description}
				</div>
				<span className='text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl'>
					{title}
				</span>
				{work.links && (
					<div className='flex gap-4 mt-8 justify-center lg:justify-start'>
						<a
							href={work.links.demo}
							target='_blank'
							rel='noopener noreferrer'
							className='px-6 py-2 bg-[#14c8c8] text-white rounded-md font-medium hover:bg-[#11b0b0] transition-colors shadow-lg hover:shadow-xl'
						>
							Live Demo
						</a>
						<a
							href={work.links.github}
							target='_blank'
							rel='noopener noreferrer'
							className='px-6 py-2 border-2 border-[#14c8c8] text-[#14c8c8] rounded-md font-medium hover:bg-[#14c8c8]/10 transition-colors'
						>
							GitHub
						</a>
					</div>
				)}
			</WorkLeft>
			<WorkRight progress={progress}>
				<div className='drop-shadow-2xl sm:mt-10 md:mt-24'>
					<Image
						src={image.src}
						alt={title}
						width={image.width}
						height={image.height}
					/>
				</div>
			</WorkRight>
		</WorkContainer >
	);
}
