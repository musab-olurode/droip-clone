'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';

import { useGradientCursor } from '@/hooks/use-gradient-cursor';

import { GradientCursor } from '@/components/common/gradient-cursor';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const GetStartedBanner = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { mousePos, handleMouseMove } = useGradientCursor({
		ref: containerRef,
	});

	return (
		<section className='container pt-16 pb-[6.25rem] min-[992px]:pt-0 min-[992px]:pb-[9.0625rem]'>
			<div
				ref={containerRef}
				className={cn(
					'relative isolate flex flex-col items-start justify-between overflow-hidden rounded-lg bg-black min-[767px]:flex-row min-[992px]:items-center min-[992px]:p-16',
					'gap-x-[1.875rem] gap-y-8 p-8 min-[992px]:gap-x-0',
				)}
				onMouseMove={handleMouseMove}
			>
				<h2
					className={cn(
						'text-4xl leading-[1em] font-medium -tracking-[0.0625rem] text-white min-[992px]:max-w-[23.125rem] min-[992px]:text-[4rem] min-[992px]:-tracking-[0.1875rem]',
						'max-w-[12.5rem]',
					)}
				>
					Get Started For Free
				</h2>
				<div className='flex flex-col gap-y-8 min-[767px]:max-w-[18.8125rem] min-[992px]:max-w-[22.75rem]'>
					<p className='leading-[1.2em] text-white'>
						Experience the power of Droip no-code website builder, risk free.
						Create stunning, responsive sites with pure creative freedom.
					</p>
					<div className='flex h-[3.25rem] items-center'>
						<Link className='w-full' href='#'>
							<Button className='group h-11 w-full rounded-lg text-lg leading-7 font-normal duration-300 hover:h-[3.25rem]'>
								Try for Free
								<span className='ml-[0.875rem] flex items-center'>
									<span className='-mr-[0.875rem] h-0.5 w-0 rounded-[4.8125rem] bg-white transition-[width] duration-300 group-hover:w-3' />
									<ChevronRight className='size-6' />
								</span>
							</Button>
						</Link>
					</div>
				</div>
				<GradientCursor mousePos={mousePos} />
			</div>
		</section>
	);
};
