'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export const PixelAccuracyImageCard = ({
	image,
}: {
	image: string;
	index: number;
}) => {
	const imageRef = useRef<HTMLImageElement>(null);
	const { scrollYProgress: fadeImagesScrollYProgress } = useScroll({
		target: imageRef,
		offset: ['start 400px', 'end 500px'],
	});

	const opacity = useTransform(fadeImagesScrollYProgress, [0, 1], [1, 0]);
	const scale = useTransform(fadeImagesScrollYProgress, [0, 1], [1, 0.5]);

	return (
		<motion.div
			ref={imageRef}
			className='relative flex h-full w-full items-center justify-center'
			style={{ opacity, scale }}
		>
			<Image
				alt='Image'
				className='w-full object-contain'
				height={120}
				src={image}
				width={235}
			/>
		</motion.div>
	);
};
