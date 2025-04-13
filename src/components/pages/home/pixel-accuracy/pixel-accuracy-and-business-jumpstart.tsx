'use client';

import { useRef } from 'react';

import { TransitionText } from '@/components/common/transition-text';
import AtomIcon from '@/components/icons/atom';
import { BusinessJumpstart } from '@/components/pages/home/business-jumpstart/business-jumpstart';
import { BoundingBox } from '@/components/pages/home/pixel-accuracy/bounding-box';
import { PixelAccuracyImageCard } from '@/components/pages/home/pixel-accuracy/pixel-accuracy-image-card';

import { motion, useScroll, useTransform } from 'motion/react';

const IMAGES = [
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp',
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider4.webp',
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider3.webp',
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider1.webp',
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider5.webp',
	'https://droip.com/wp-content/uploads/2025/03/vertical-slider2.webp',
];

export const PixelAccuracyAndBusinessJumpstart = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const orTextRef = useRef<HTMLDivElement>(null);
	const businessJumpstartRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: containerScrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', '0.8 end'],
	});
	const { scrollYProgress: orTextScrollYProgress } = useScroll({
		target: containerRef,
		offset: ['0.8 end', 'end end'],
	});
	const { scrollYProgress: businessJumpstartScrollYProgress } = useScroll({
		target: businessJumpstartRef,
		offset: ['start end', 'start 0.9'],
	});

	const translateImagesY = useTransform(
		containerScrollYProgress,
		[0, 1],
		['0%', '-72.5%'],
	);
	const imagesOpacity = useTransform(
		businessJumpstartScrollYProgress,
		[0, 1],
		[1, 0],
	);
	const translateOrTextY = useTransform(
		orTextScrollYProgress,
		[0, 1],
		['59.085px', '0px'],
	);
	const orTextOpacity = useTransform(orTextScrollYProgress, [0, 1], [0, 1]);
	const orTextColor = useTransform(
		businessJumpstartScrollYProgress,
		[0, 1],
		['#000000', '#ffffff'],
	);

	const titleTextOpacity = useTransform(orTextScrollYProgress, [0, 1], [1, 0]);
	const translateTitleTextY = useTransform(
		orTextScrollYProgress,
		[0, 1],
		['0px', '-60px'],
	);

	const sectionBackground = useTransform(
		businessJumpstartScrollYProgress,
		[0, 1],
		['#f5f5f7', '#000000'],
	);

	return (
		<motion.section style={{ background: sectionBackground }}>
			<div ref={containerRef} className='container h-[200vh] pt-[12.5rem]'>
				<div className='sticky inset-auto top-[6.25rem] flex max-h-[51.875rem] justify-between gap-x-10 overflow-hidden'>
					<motion.div
						className='max-w-[37.5rem]'
						style={{
							translateY: translateTitleTextY,
							opacity: titleTextOpacity,
						}}
					>
						<TransitionText lines={5}>
							<h2 className='[font-size:clamp(5rem,8vw,6rem)] leading-[1.1em] font-medium -tracking-[0.3125rem]'>
								Create <br />
								pixel-perfect accuracy in the atomic level
							</h2>
						</TransitionText>
					</motion.div>
					<div className='relative flex w-full max-w-[14.6875rem] flex-col items-center gap-y-10'>
						<motion.div
							className='flex flex-col gap-y-10'
							style={{
								translateY: translateImagesY,
								opacity: imagesOpacity,
							}}
						>
							{IMAGES.map((image, index) => (
								<PixelAccuracyImageCard
									key={index}
									image={image}
									index={index}
								/>
							))}
						</motion.div>
						<BoundingBox />
						<motion.h3
							ref={orTextRef}
							className='absolute inset-auto bottom-[22.5rem] translate-y-[120px] text-[10.75rem] font-semibold -tracking-[0.5375rem]'
							style={{
								translateY: translateOrTextY,
								opacity: orTextOpacity,
								color: orTextColor,
							}}
						>
							Or
						</motion.h3>
					</div>
					<motion.div
						className='mt-[28rem] flex w-full max-w-[19.75rem] flex-col gap-y-8'
						style={{
							translateY: translateTitleTextY,
							opacity: titleTextOpacity,
						}}
					>
						<AtomIcon className='animate-spin-atom' />
						<TransitionText lines={4}>
							<p className='text-2xl leading-[1.8rem] -tracking-[0.03rem]'>
								Create your website from the ground up with complete control
								over every element, down to the smallest detail.
							</p>
						</TransitionText>
					</motion.div>
				</div>
			</div>
			<BusinessJumpstart ref={businessJumpstartRef} />
		</motion.section>
	);
};
