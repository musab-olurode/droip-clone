'use client';

import { cn } from '@/lib/utils';

import { motion } from 'motion/react';

export const GradientCursor = ({
	mousePos,
	variant = 'dark',
	hide = false,
}: {
	mousePos: { x: number; y: number };
	variant?: 'dark' | 'light';
	hide?: boolean;
}) => {
	return (
		<>
			<motion.div
				animate={{
					x: mousePos.x,
					y: mousePos.y,
					opacity: hide ? 0 : 1,
				}}
				className={cn(
					'pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center justify-center',
					variant === 'light' && 'opacity-[0.6]',
				)}
				transition={{
					type: 'spring',
					mass: 0.1,
				}}
			>
				<div className='pointer-events-none absolute inset-auto -z-[1] h-[31rem] w-[45.75rem] rounded-[100%] bg-[#5641f3] opacity-[0.48] blur-[8.9375rem]' />
			</motion.div>
			<motion.div
				animate={{
					x: mousePos.x,
					y: mousePos.y,
					opacity: hide ? 0 : 1,
				}}
				className='pointer-events-none absolute inset-0 z-[2] flex h-full w-full items-center justify-center mix-blend-overlay'
				transition={{
					type: 'spring',
					mass: 0.1,
				}}
			>
				<div className='pointer-events-none absolute -z-[1] size-[42.5rem] rounded-full bg-white opacity-[0.6] mix-blend-overlay blur-[12.5rem]' />
			</motion.div>
		</>
	);
};
