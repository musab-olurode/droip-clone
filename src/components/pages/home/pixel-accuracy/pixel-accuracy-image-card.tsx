'use client';

import { motion, MotionValue, useTransform } from 'motion/react';

export const PixelAccuracyImageCard = ({
	image,
	index,
	containerScrollYProgress,
}: {
	image: string;
	index: number;
	containerScrollYProgress: MotionValue<number>;
}) => {
	// Calculate initial scale based on index
	const getInitialScale = () => {
		const scales = ['50%', '75%', '100%', '75%', '50%', '50%'];

		return scales[index % scales.length];
	};

	// Calculate initial opacity based on index
	const getInitialOpacity = () => {
		const opacities = [0.3, 0.5, 1, 0.5, 0.3, 0.3];

		return opacities[index % opacities.length];
	};

	// Calculate input range based on index
	const getInputRange = () => {
		if (index < 3) {
			// For first three items (0, 1, 2), only scale down
			return [0, 0, 1];
		}

		// For remaining items, scale up then down
		return [0, 0.4, 1];
	};

	const inputRange = getInputRange();

	const opacity = useTransform(
		containerScrollYProgress,
		inputRange,
		index < 3
			? [getInitialOpacity(), getInitialOpacity(), 0.3]
			: [getInitialOpacity(), 1, getInitialOpacity()],
	);
	const width = useTransform(
		containerScrollYProgress,
		inputRange,
		index < 3
			? [getInitialScale(), getInitialScale(), '50%']
			: [getInitialScale(), '100%', getInitialScale()],
	);

	return (
		<div className='relative mx-auto flex h-full w-auto items-center justify-center'>
			<motion.img
				alt={`Pixel accuracy image ${index}`}
				className='h-auto w-1/2 object-contain'
				height={120}
				src={image}
				style={{ opacity, width }}
				width={235}
			/>
		</div>
	);
};
