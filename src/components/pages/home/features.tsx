'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import useTailwindBreakpoints from '@/hooks/use-tailwind-breakpoints';

import { TransitionText } from '@/components/common/transition-text';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CONTENT = [
	{
		title: 'Advanced typography',
		subtitle:
			'Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/advanced-typography.webp',
	},
	{
		title: 'CSS grids and layouts',
		subtitle:
			'Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/CSS-Grids-Layouts.webp',
	},
	{
		title: 'Adaptive design',
		subtitle:
			'Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/auto-responsive-1.webp',
	},
	{
		title: 'Designed for efficiency',
		subtitle:
			'Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/Designed-for-Efficiency.webp',
	},
];

const CONTENT2 = [
	{
		title: 'Advanced interaction timeline',
		subtitle:
			'Design smooth, multi-step animations with a timeline-based editor for complete control.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/Advanced-Interaction-timeline.webp',
	},
	{
		title: 'Custom timing editor',
		subtitle:
			'Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more. ',
		image:
			'https://droip.com/wp-content/uploads/2025/03/Custom-Timing-Editor.webp',
	},
	{
		title: 'Advanced triggers',
		subtitle:
			'Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/Advanced-Triggers.webp',
	},
	{
		title: 'Achieve limitless precision',
		subtitle:
			'Create flawless, interactive designs visually with unmatched accuracy and finesse.',
		image:
			'https://droip.com/wp-content/uploads/2025/03/Achieve-Limitless-Precision.webp',
	},
];

const title = {
	1: 'Design pixel-perfect sites beyond ordinary',
	2: 'Craft engaging and immersive interactions',
};

export const Features = ({ variant = 1 }: { variant?: 1 | 2 }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { width } = useTailwindBreakpoints();

	return (
		<section className='container py-[4.5rem] min-[992px]:py-32'>
			<TransitionText lines={width > 575 ? 2 : 3}>
				<h2
					className={cn(
						'pointer-events-auto text-[2.875rem] leading-[1.1em] font-medium max-[575px]:[font-size:clamp(2.875rem,11vw,3.75rem)] min-[992px]:text-8xl',
						'-tracking-[0.1875rem] min-[992px]:-tracking-[0.3125rem]',
						variant === 2 && 'max-w-[62.5rem]',
					)}
				>
					{title[variant]}
				</h2>
			</TransitionText>
			<div
				className={cn(
					'flex justify-between gap-x-[3.125rem] gap-y-4 pt-[7.8125rem]',
					variant === 2 && 'min-[992px]:flex-row-reverse',
				)}
			>
				<div
					className={cn(
						'relative isolate h-fit w-full min-[992px]:max-w-[25.5rem]',
						variant === 2 && 'min-[992px]:max-w-[28.5rem]',
					)}
				>
					<div className='flex flex-col gap-y-10'>
						{[...(variant === 1 ? CONTENT : CONTENT2)].map((content, index) => (
							<button
								key={`content-${index}`}
								className='group cursor-pointer text-start'
								onClick={() => setActiveIndex(index)}
							>
								<div className='flex cursor-pointer gap-x-[1.5625rem] group-last:-mb-[1.875rem]'>
									<div className='size-9 shrink-0 bg-[#f5f5f7]'>
										<div className='relative isolate flex h-full w-full items-center justify-center'>
											<div className='bg-primary size-1.5 rounded-full' />
											<div
												className={cn(
													'absolute top-1/2 left-1/2 -z-10 size-6 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#ddd9fd]',
													'transition-transform duration-500 ease-in-out',
													index === activeIndex && 'scale-100',
												)}
											/>
										</div>
									</div>
									<div className='flex flex-col gap-y-6'>
										<h3
											className={cn(
												'ease scale-100 text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem] opacity-100 transition-[opacity,scale]',
												'origin-[0%_50%] duration-500',
												index !== activeIndex && 'scale-75 opacity-50',
											)}
										>
											{content.title}
										</h3>
										<div
											className={cn(
												'grid [grid-template-rows:0fr] transition-[grid-template-rows] duration-500 ease-in-out',
												index === activeIndex && '[grid-template-rows:1fr]',
											)}
										>
											<div className='overflow-hidden'>
												<div className='flex flex-col gap-y-[1.125rem] pb-[3.375rem]'>
													<p
														className={cn(
															'leading-[1.4rem] text-[#373542]',
															variant === 1 && 'max-w-[18.75rem]',
														)}
													>
														{content.subtitle}
													</p>
													{variant === 1 && (
														<Link
															className='text-primary group/link flex w-fit items-center gap-x-2 p-0.5 leading-[1.75rem] font-semibold -tracking-[0.005rem]'
															href='#'
														>
															<span className='relative'>
																View Details
																<div className='bg-primary h-px w-0 transition-[width] duration-300 group-hover/link:w-full' />
															</span>
															<ArrowRight className='text-primary size-6 transition-transform duration-300 group-hover/link:translate-x-[0.3125rem]' />
														</Link>
													)}
													<Image
														alt={content.title}
														className='static w-full overflow-hidden rounded-lg object-contain min-[992px]:hidden'
														height={500}
														src={content.image}
														width={874}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</button>
						))}
					</div>
					<div className='absolute inset-0 left-[1.0375rem] -z-10 w-0.5 bg-[#ddd9fd]' />
				</div>
				<div className='flex-start relative hidden h-[33.625rem] w-[55%] min-[992px]:flex'>
					{[...(variant === 1 ? CONTENT : CONTENT2)].map((content, index) => (
						<div
							key={`content-image-${index}`}
							className={cn(
								'absolute top-0 left-0 w-full overflow-hidden rounded-lg transition-[width] duration-700 ease-in-out',
								index === 0 && 'z-[4]',
								index === 1 && 'z-[3]',
								index === 2 && 'z-[2]',
								index === 3 && 'z-[1]',
								index < activeIndex && 'w-0',
							)}
						>
							<Image
								alt={content.title}
								className='static h-[33.625rem] min-w-[47.5536875rem] rounded-lg'
								height={500}
								src={content.image}
								width={874}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
