import { motion, MotionValue, useTransform } from 'motion/react';

export const BoundingBox = ({
	containerScrollYProgress,
}: {
	containerScrollYProgress: MotionValue<number>;
}) => {
	const y = useTransform(
		containerScrollYProgress,
		[0, 0.413194, 0.53183],
		[0, -120, -99.8],
	);
	const height = useTransform(
		containerScrollYProgress,
		[0, 0.413194, 0.53183, 0.8234],
		['259.07px', '74px', '199.06px', '128.96px'],
	);
	const opacity = useTransform(containerScrollYProgress, [0.8234, 0.9], [1, 0]);

	return (
		<div className='absolute inset-0 top-[20.125rem] aspect-square w-full'>
			<motion.div
				className='relative h-[13.6606875rem] w-full border border-dashed border-[#0cf5ff]'
				style={{
					y,
					height,
					opacity,
				}}
			>
				<span className='absolute -top-[0.3125rem] -left-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -right-[0.3125rem] -bottom-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -top-[0.3125rem] -right-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -bottom-[0.3125rem] -left-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute top-1/2 -left-[0.3125rem] size-2 -translate-y-1/2 border border-[#585858] bg-white' />
				<span className='absolute top-1/2 -right-[0.3125rem] size-2 -translate-y-1/2 border border-[#585858] bg-white' />
			</motion.div>
		</div>
	);
};
