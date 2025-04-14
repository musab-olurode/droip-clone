'use client';

import { useRef } from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { GradientCursor } from '@/components/common/gradient-cursor';
import { TransitionText } from '@/components/common/transition-text';

import Image from 'next/image';

export const Performance = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		setMousePos({ x, y });
	};

	return (
		<section
			ref={containerRef}
			className='relative isolate mb-[3.75rem] flex overflow-hidden bg-black'
			onMouseMove={handleMouseMove}
		>
			<div className='container py-16 min-[767px]:py-[4.5rem] min-[992px]:py-32'>
				<div className='mx-auto mb-16 w-fit min-[575px]:mb-12 min-[992px]:mb-32'>
					<TransitionText bg='black' lines={2}>
						<h2
							className={cn(
								'pointer-events-auto text-center font-semibold min-[575px]:leading-[1.1em] min-[575px]:-tracking-[0.125rem] min-[767px]:text-[2.875rem]',
								'text-[2rem] -tracking-[0.0625rem] text-white min-[575px]:text-[2.75rem] min-[992px]:text-[4rem] min-[992px]:-tracking-[0.2rem]',
								'leading-[1.2em]',
							)}
						>
							Performance that <br />
							sets you apart
						</h2>
					</TransitionText>
				</div>
				<div className='grid grid-cols-1 items-stretch justify-end gap-x-[1.125rem] gap-y-4 min-[992px]:grid-cols-2'>
					<article className='flex flex-col justify-between overflow-hidden rounded-lg bg-[#ffffff1a]'>
						<div className='flex flex-col gap-y-[1.125rem] p-6 text-white min-[767px]:gap-y-6 min-[767px]:p-8 min-[992px]:p-12'>
							<h3
								className={cn(
									'font-semibold min-[767px]:text-[1.75rem] min-[767px]:leading-[2.375rem] min-[767px]:-tracking-[0.0875rem] min-[992px]:text-[2rem]',
									'text-2xl leading-[1.875rem] -tracking-[0.025rem] min-[992px]:-tracking-[0.125rem]',
								)}
							>
								Clean code output
							</h3>
							<p className='max-w-[27.125rem] font-medium tracking-normal opacity-[0.72]'>
								Droip generates minimal, well-structured code that is free from
								unnecessary bloat ensuring efficiency.
							</p>
						</div>
						<Image
							alt='Performance'
							className='w-full object-cover'
							height={407}
							sizes='(max-width: 1302px) 100vw, 1302px'
							src='https://droip.com/wp-content/uploads/2025/03/clean-code.webp'
							width={651}
						/>
					</article>
					<article className='flex flex-col justify-between overflow-hidden rounded-lg bg-[#ffffff1a]'>
						<div className='flex flex-col gap-y-[1.125rem] p-6 text-white min-[767px]:gap-y-6 min-[767px]:p-8 min-[992px]:p-12'>
							<h3
								className={cn(
									'font-semibold min-[767px]:text-[1.75rem] min-[767px]:leading-[2.375rem] min-[767px]:-tracking-[0.0875rem] min-[992px]:text-[2rem]',
									'text-2xl leading-[1.875rem] -tracking-[0.025rem] min-[992px]:-tracking-[0.125rem]',
								)}
							>
								Keep website lightweight
							</h3>
							<p className='max-w-[27.125rem] font-medium tracking-normal opacity-[0.72]'>
								Optimized code means faster load times, improved performance,
								and a smoother user experience.
							</p>
						</div>
						<Image
							alt='Performance'
							className='w-full object-cover'
							height={407}
							sizes='(max-width: 1302px) 100vw, 1302px'
							src='https://droip.com/wp-content/uploads/2025/03/lightweight.webp'
							width={651}
						/>
					</article>
				</div>
			</div>
			<GradientCursor mousePos={mousePos} variant='light' />
		</section>
	);
};
