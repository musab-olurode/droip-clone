'use client';

import { useRef, useState } from 'react';

import { GradientCursor } from '@/components/common/gradient-cursor';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const GetStartedBanner = () => {
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
		<section className='container pb-[9.0625rem]'>
			<div
				ref={containerRef}
				className='relative isolate flex items-center justify-between overflow-hidden rounded-lg bg-black p-16'
				onMouseMove={handleMouseMove}
			>
				<h2 className='max-w-[23.125rem] text-[4rem] leading-[1em] font-medium -tracking-[0.1875rem] text-white'>
					Get Started For Free
				</h2>
				<div className='flex max-w-[22.75rem] flex-col gap-y-8'>
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
