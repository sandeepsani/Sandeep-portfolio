'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Contact() {
	return (
		<section
			id='contact'
			className='relative min-h-screen w-screen py-20 px-8 md:px-16 xl:px-24 dark:bg-black dark:text-white bg-white text-black flex items-center'
		>
			<div className='flex flex-col justify-center max-w-4xl mx-auto w-full'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-6xl xl:text-7xl font-bold mb-8 leading-tight'>
						Looking for{' '}
						<span className='text-primary-500'>Full-Time</span> Opportunities
					</h2>

					<p className='text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl'>
						I&apos;m actively seeking full-time software engineering positions where I can contribute
						to building scalable backend systems and drive impactful results.
					</p>

					<div className='flex flex-col sm:flex-row gap-6'>
						<Link
							href='https://mail.google.com/mail/?view=cm&to=kairamkondasandeep046@gmail.com'
							target='_blank'
							className='inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white text-lg font-medium rounded-full hover:bg-primary-600 transition-all hover:scale-105 shadow-lg shadow-primary-500/25'
						>
							Get in Touch
						</Link>
						<Link
							href='https://www.linkedin.com/in/sandeep-kairamkonda-0a6887148/'
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-lg font-medium rounded-full hover:border-primary-500 hover:text-primary-500 transition-all'
						>
							Connect on LinkedIn
						</Link>
					</div>

					<div className='mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800'>
						<p className='text-sm text-neutral-500 dark:text-neutral-400'>
							Based in Milwaukee, WI • Seeking Full-Time Positions
						</p>
						<p className='text-sm text-neutral-500 dark:text-neutral-400 mt-2'>
							kairamkondasandeep046@gmail.com • +1 (312) 973-9773
						</p>
					</div>
				</motion.div>
			</div>

			{/* Footer */}
			<div className='absolute bottom-8 left-0 right-0 text-center'>
				<p className='text-sm text-neutral-400'>
					© {new Date().getFullYear()} Sandeep Kairamkonda. Built with Next.js & Tailwind CSS.
				</p>
			</div>
		</section>
	);
}
