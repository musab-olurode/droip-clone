'use client';

import { Fragment } from 'react';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const IMAGES = {
	row1: [
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-1.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-10.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-3.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-2.webp',
	],
	row2: [
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-8.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-4.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-7.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template1-1.webp',
	],
	row3: [
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-9.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-11.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-6.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-12.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template-Thumbnail-12-1.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template4-1.webp',
		'https://droip.com/wp-content/uploads/2025/03/Template8.webp',
	],
};

export const BusinessJumpstartImageSlider = () => {
	return (
		<div className='relative inset-auto right-0 flex w-full flex-col gap-y-0.5 overflow-hidden min-[992px]:absolute min-[992px]:top-[5.9375rem] min-[992px]:w-[65%]'>
			<div className='absolute inset-0 left-auto z-[1] w-[15%] [background-image:linear-gradient(90deg,#00000000_0%,rgba(0,0,0,1)_95%)]' />
			<div className='absolute inset-0 right-auto z-[1] w-[15%] rotate-180 [background-image:linear-gradient(90deg,#00000000_0%,rgba(0,0,0,1)_95%)]' />
			<div className='flex w-full min-w-auto'>
				<motion.div
					animate={{
						x: ['0%', '-50%'],
					}}
					className='flex shrink-0 gap-x-0.5'
					transition={{
						duration: 29.98,
						repeat: Infinity,
						ease: 'linear',
					}}
				>
					{new Array(2).fill(null).map((_, index) => (
						<Fragment key={index}>
							{IMAGES.row1.map((image, rowIndex) => (
								<Link
									key={`image-${rowIndex}`}
									className='flex shrink-0 flex-col gap-y-0.5 overflow-hidden rounded-[0.34375rem]'
									href='/'
								>
									<Image
										alt=''
										className='h-[14.75rem] w-[26.25rem] object-cover'
										height={236}
										src={image}
										width={420}
									/>
								</Link>
							))}
						</Fragment>
					))}
				</motion.div>
			</div>
			<div className='flex w-full min-w-auto'>
				<motion.div
					animate={{
						x: ['-50%', '0%'],
					}}
					className='flex shrink-0 [transform:translateX(-50%)] gap-x-0.5'
					transition={{
						duration: 29.98,
						repeat: Infinity,
						ease: 'linear',
					}}
				>
					{new Array(2).fill(null).map((_, index) => (
						<Fragment key={index}>
							{IMAGES.row2.map((image, rowIndex) => (
								<Link
									key={`image-${rowIndex}`}
									className='flex shrink-0 flex-col gap-y-0.5 overflow-hidden rounded-[0.34375rem]'
									href='/'
								>
									<Image
										alt=''
										className='h-[11.25rem] w-[20rem] object-cover'
										height={180}
										src={image}
										width={320}
									/>
								</Link>
							))}
						</Fragment>
					))}
				</motion.div>
			</div>
			<div className='flex w-full min-w-auto'>
				<motion.div
					animate={{
						x: ['0%', '-50%'],
					}}
					className='flex shrink-0 gap-x-0.5'
					transition={{
						duration: 29.98,
						repeat: Infinity,
						ease: 'linear',
					}}
				>
					{new Array(2).fill(null).map((_, index) => (
						<Fragment key={index}>
							{IMAGES.row3.map((image, rowIndex) => (
								<Link
									key={`image-${rowIndex}`}
									className='flex shrink-0 flex-col gap-y-0.5 overflow-hidden rounded-[0.34375rem]'
									href='/'
								>
									<Image
										alt=''
										className='h-[8.4375rem] w-[15rem] object-cover'
										height={135}
										src={image}
										width={240}
									/>
								</Link>
							))}
						</Fragment>
					))}
				</motion.div>
			</div>
		</div>
	);
};
