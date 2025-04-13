'use client';

import { PropsWithChildren } from 'react';

import { motion } from 'motion/react';

interface Props extends PropsWithChildren {
	lines: number;
	bg?: string;
}

export const TransitionText = ({ children, lines, bg = '#f5f5f7' }: Props) => {
	return (
		<motion.div
			className='relative flex flex-col items-start overflow-hidden'
			initial='hidden'
			viewport={{ once: true }}
			whileInView='visible'
		>
			{children}
			<div className='absolute inset-0 flex flex-col'>
				{Array.from({ length: lines }).map((_, index) => (
					<motion.div
						key={index}
						className='h-full w-full opacity-[0.68]'
						style={{ backgroundColor: bg }}
						transition={{ duration: 1, delay: index * 0.1 }}
						variants={{
							hidden: { x: 0 },
							visible: { x: '100%' },
						}}
					/>
				))}
			</div>
		</motion.div>
	);
};
