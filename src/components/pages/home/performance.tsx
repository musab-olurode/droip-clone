'use client';

import { useRef } from 'react';
import { useState } from 'react';

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
			<div className='container py-32'>
				<div className='mx-auto mb-32 w-fit'>
					<TransitionText bg='black' lines={2}>
						<h2 className='text-center text-[4rem] leading-[1.1em] font-semibold -tracking-[0.2rem] text-white'>
							Performance that <br />
							sets you apart
						</h2>
					</TransitionText>
				</div>
				<div className='grid grid-cols-2 items-stretch justify-end gap-x-[1.125rem] gap-y-1'>
					<article className='flex flex-col justify-between overflow-hidden rounded-lg bg-[#ffffff1a]'>
						<div className='flex flex-col gap-y-6 p-12 text-white'>
							<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.125rem]'>
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
						<div className='flex flex-col gap-y-6 p-12 text-white'>
							<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.125rem]'>
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
