'use client';

import { useMemo, useRef } from 'react';

import { cn } from '@/lib/utils';

import useTailwindBreakpoints from '@/hooks/use-tailwind-breakpoints';

import { TransitionText } from '@/components/common/transition-text';
import AtomIcon from '@/components/icons/atom';
import { BusinessJumpstart } from '@/components/pages/home/business-jumpstart/business-jumpstart';
import { BoundingBox } from '@/components/pages/home/pixel-accuracy/bounding-box';
import { PixelAccuracyImageCard } from '@/components/pages/home/pixel-accuracy/pixel-accuracy-image-card';

import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';

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
	const { width } = useTailwindBreakpoints();

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

	const titleTextLines = useMemo(() => {
		if (width < 465) return 4;
		if (width < 992) return 3;

		return 5;
	}, [width]);

	return (
		<motion.section style={{ background: sectionBackground }}>
			<div
				ref={containerRef}
				className='container h-[200vh] pt-[6.25rem] min-[992px]:pt-[12.5rem]'
			>
				<div
					className={cn(
						'inset-auto top-[6.25rem] order-1 flex flex-col justify-between gap-x-10 min-[992px]:sticky min-[992px]:max-h-[51.875rem]',
						'max-h-none gap-y-9 overflow-visible min-[992px]:flex-row min-[992px]:overflow-hidden',
					)}
				>
					<motion.div
						className='max-w-[37.5rem]'
						style={{
							translateY: translateTitleTextY,
							opacity: titleTextOpacity,
						}}
					>
						<TransitionText lines={titleTextLines}>
							<h2
								className={cn(
									'text-[2.875rem] leading-[1.1em] font-medium -tracking-[0.1875rem] min-[992px]:[font-size:clamp(5rem,8vw,6rem)] min-[992px]:-tracking-[0.3125rem]',
									'pointer-events-auto max-w-[33.3125rem] min-[992px]:max-w-[37.5rem]',
								)}
							>
								Create <br />
								pixel-perfect accuracy in the atomic level
							</h2>
						</TransitionText>
					</motion.div>
					<div className='order-3 min-[992px]:order-2'>
						<div className='sticky top-0 flex w-full flex-col items-center justify-center gap-y-10 min-[992px]:relative min-[992px]:max-w-[14.6875rem]'>
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
					</div>
					<motion.div
						className='order-2 flex w-full max-w-[31.25rem] flex-col gap-y-[1.125rem] min-[992px]:order-3 min-[992px]:mt-[28rem] min-[992px]:max-w-[19.75rem] min-[992px]:gap-y-8'
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
						<Link
							className='text-primary group/link flex w-fit items-center gap-x-2 p-0.5 leading-[1.75rem] font-semibold -tracking-[0.005rem]'
							href='#'
						>
							<span className='relative'>
								Get Started With Tutorials
								<div className='bg-primary h-px w-0 transition-[width] duration-300 group-hover/link:w-full' />
							</span>
							<ArrowRight className='text-primary size-6 transition-transform duration-300 group-hover/link:translate-x-[0.3125rem]' />
						</Link>
					</motion.div>
				</div>
			</div>
			<BusinessJumpstart ref={businessJumpstartRef} />
		</motion.section>
	);
};
