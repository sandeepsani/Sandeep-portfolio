import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { playfair } from '../../fonts';
import { GmailIcon } from '../layouts/icons/gmail-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import SplashCursor from '../splash-cursor';
import ArrowDown from './arrow-down';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<div
					className={classNames('relative min-h-svh', playfair.className)}
				>
					<ArrowDown />
					<div className='absolute top-[15%] md:top-[25%] max-w-6xl flex-col space-y-6 justify-center px-8 md:px-24 lg:ml-14'>
						{/* Profile Section with Headshot */}
						<div className='flex flex-col md:flex-row items-start md:items-center gap-6 mb-4'>
							<div className='relative'>
								<Image
									src='/Headshots/pro_headshot_400x400.jpg'
									alt='Sandeep Kairamkonda'
									width={120}
									height={120}
									className='rounded-full ring-4 ring-primary-500/30 shadow-2xl'
									priority
								/>
								<div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-black' title='Available for opportunities' />
							</div>
							<div>
								<p className='text-sm text-primary-500 font-medium mb-1'>Software Engineer</p>
								<h2 className='text-2xl md:text-3xl font-bold'>Sandeep Kairamkonda</h2>
								<p className='text-neutral-500 dark:text-neutral-400 text-sm'>Milwaukee, WI • Seeking Full-Time Positions</p>
							</div>
						</div>

						<h1 className='text-xl font-medium md:mr-4 md:text-3xl lg:text-4xl leading-tight'>
							Architecting High-Scale{' '}
							<span className='font-bold text-primary-500'>Backend Systems</span> That Power{' '}
							<span className='italic border-b border-primary-500'>Millions</span> of Daily Requests
						</h1>
						<section className='relative z-10'>
							<p className='text-base md:text-lg text-justify max-w-3xl text-neutral-700 dark:text-neutral-300'>
								Senior Backend Software Engineer with 5 years of experience
								architecting distributed systems processing <span className='font-semibold text-primary-500'>2.1M+ daily requests</span>,
								optimizing <span className='font-semibold text-primary-500'>$8.3M monthly payment transactions</span>, and
								achieving <span className='font-semibold text-primary-500'>99.96% service uptime</span> across Fortune 500 companies.
							</p>
						</section>
						<section className='relative z-10 flex flex-wrap gap-6 items-center text-sm'>
							<div>
								<p className='text-neutral-500 dark:text-neutral-400 mb-2'>Connect with me:</p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/sandeep-kairamkonda-0a6887148/'
										target='_blank'
										rel='noreferrer'
										aria-label='linkedin'
										data-skip-splash-cursor
										className='hover:text-primary-500 transition-colors'
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com'
										target='_blank'
										rel='noreferrer'
										aria-label='github'
										data-skip-splash-cursor
										className='hover:text-primary-500 transition-colors'
									>
										<GithubIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://mail.google.com/mail/?view=cm&to=kairamkondasandeep046@gmail.com'
										target='_blank'
										aria-label='email'
										rel='noreferrer'
										data-skip-splash-cursor
										className='hover:text-primary-500 transition-colors'
									>
										<GmailIcon className='h-9 w-9' />
									</Link>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300 dark:border-gray-700 hidden md:block' />
							<div className='flex flex-wrap gap-3' data-skip-splash-cursor>
								<Link
									href='#skills'
									className='px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-primary-500 hover:text-primary-500 transition-all'
								>
									Skills
								</Link>
								<Link
									href='#experience'
									className='px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-primary-500 hover:text-primary-500 transition-all'
								>
									Experience
								</Link>
								<Link
									href='#contact'
									className='px-4 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-all'
								>
									Contact
								</Link>
							</div>
						</section>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
