'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { motion } from 'motion/react';

interface Props extends PropsWithChildren {
	lines: number;
	bg?: string;
}

export const TransitionText = ({ children, lines, bg = '#f5f5f7' }: Props) => {
	const [prevLines, setPrevLines] = useState(lines);

	useEffect(() => {
		setPrevLines(lines);
	}, [lines]);

	return (
		<motion.div
			className='pointer-events-none relative flex flex-col items-start overflow-hidden'
			initial='hidden'
			viewport={{ once: true }}
			whileInView='visible'
		>
			{children}
			<div className='absolute inset-0 flex flex-col'>
				{Array.from({ length: Math.max(prevLines, lines) }).map((_, index) => (
					<motion.div
						key={index}
						animate={index < lines ? 'visible' : 'hidden'}
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
