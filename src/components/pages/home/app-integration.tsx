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
		<section className='container py-16 min-[767px]:py-[4.5rem] min-[992px]:py-32'>
			<h2 className='text-[2.875rem] leading-[1.1em] font-medium -tracking-[0.1875rem] min-[992px]:text-8xl min-[992px]:-tracking-[0.3125rem]'>
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
				<p
					className={cn(
						'min-[575px]:max-w-[20rem] min-[575px]:leading-[1.8rem] min-[767px]:max-w-[22.5rem] min-[767px]:-tracking-[0.03rem] min-[992px]:min-w-[25rem]',
						'max-w-[16.875rem] min-[575px]:text-[1.125rem] min-[575px]:leading-[1.5rem] min-[767px]:text-2xl min-[992px]:max-w-[27.8125rem]',
						'min-w-auto text-lg leading-6 min-[575px]:-tracking-[0.01875rem]',
					)}
				>
					Connect your go-to apps effortlessly within the builder for a smooth
					and uninterrupted workflow.
				</p>
			</div>
			<div className='group grid grid-cols-4 gap-px min-[767px]:grid-cols-6'>
				{LOGOS.map((logo, index) => (
					<div
						key={index}
						className={cn(
							'flex h-full w-full items-center justify-center overflow-hidden rounded-[0.75rem] bg-[#ebe8fe] hover:bg-[#c9c2fb] min-[992px]:min-h-[6.875rem]',
							'ease group/logo transition-[background-color,scale,filter] duration-[400ms] group-hover:blur-[0.1875rem] hover:blur-none min-[767px]:min-h-[6.25rem]',
							'min-h-16 min-[575px]:min-h-20',
						)}
					>
						<Image
							alt='logo'
							className={cn(
								'ease rounded-[0.75rem] object-contain transition-transform duration-[400ms] group-hover/logo:scale-[1.3] min-[992px]:size-12',
								'size-[1.875rem] min-[767px]:size-9',
							)}
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
