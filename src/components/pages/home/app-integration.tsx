'use client';

import { cn } from '@/lib/utils';

import { motion } from 'motion/react';
import Image from 'next/image';

const LOGOS = [
	'/icons/svgexport-41.svg',
	'/icons/svgexport-42.svg',
	'/icons/svgexport-43.svg',
	'/icons/svgexport-44.svg',
	'/icons/svgexport-45.svg',
	'/icons/svgexport-46.svg',
	'/icons/svgexport-47.svg',
	'/icons/svgexport-48.svg',
	'/icons/svgexport-49.svg',
	'/icons/svgexport-50.svg',
	'/icons/svgexport-51.svg',
	'/icons/svgexport-52.svg',
	'/icons/svgexport-53.svg',
	'/icons/svgexport-54.svg',
	'/icons/svgexport-55.svg',
	'https://droip.com/wp-content/uploads/2025/04/image-56386.webp',
	'/icons/svgexport-56.svg',
	'/icons/svgexport-57.svg',
	'/icons/svgexport-58.svg',
	'/icons/svgexport-59.svg',
	'/icons/svgexport-60.svg',
	'/icons/svgexport-61.svg',
	'/icons/svgexport-62.svg',
	'https://droip.com/wp-content/uploads/2025/04/Re-captcha.webp',
];

export const AppIntegration = () => {
	return (
		<section className='container py-32'>
			<h2 className='text-8xl leading-[1.1em] font-medium -tracking-[0.3125rem]'>
				App <br />
				integration
			</h2>
			<div className='flex-start mt-6 mb-24 flex min-h-[5.625rem] gap-x-6'>
				<div className='w-full'>
					<motion.div
						className='h-px w-full [background-image:linear-gradient(90deg,#5641f300_0%,#5641f3_62%,#5641f3_100%)]'
						initial={{
							width: '0%',
						}}
						transition={{
							duration: 1,
							ease: 'easeInOut',
						}}
						viewport={{ once: true }}
						whileInView={{
							width: '100%',
						}}
					/>
					<div className='flex flex-col items-end'>
						<motion.div
							className='bg-primary h-[4.125rem] w-px'
							initial={{
								height: '0',
							}}
							transition={{
								delay: 1,
								duration: 0.7,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
							whileInView={{
								height: '4.125rem',
							}}
						/>
						<motion.div
							className='bg-primary relative left-[0.46rem] size-[0.9375rem] rounded-full'
							initial={{
								scale: 0,
								translateY: '-0.3125rem',
							}}
							transition={{
								delay: 1.2,
								duration: 0.5,
								ease: 'linear',
							}}
							viewport={{ once: true }}
							whileInView={{
								scale: 1,
								translateY: '0',
							}}
						/>
					</div>
				</div>
				<p className='max-w-[27.8125rem] min-w-[25rem] text-2xl leading-[1.8rem] -tracking-[0.03rem]'>
					Connect your go-to apps effortlessly within the builder for a smooth
					and uninterrupted workflow.
				</p>
			</div>
			<div className='group grid grid-cols-6 gap-px'>
				{LOGOS.map((logo, index) => (
					<div
						key={index}
						className={cn(
							'flex h-full min-h-[6.875rem] w-full items-center justify-center overflow-hidden rounded-[0.75rem] bg-[#ebe8fe] hover:bg-[#c9c2fb]',
							'ease group/logo transition-[background-color,scale,filter] duration-[400ms] group-hover:blur-[0.1875rem] hover:blur-none',
						)}
					>
						<Image
							alt='logo'
							className='ease size-12 rounded-[0.75rem] object-contain transition-transform duration-[400ms] group-hover/logo:scale-[1.3]'
							height={48}
							src={logo}
							width={48}
						/>
					</div>
				))}
			</div>
		</section>
	);
};
