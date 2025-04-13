'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	description: string;
	image: string;
}

export const BusinessScaleCard = ({ title, description, image }: Props) => {
	const cardRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [1.09997, 1], {
		clamp: true,
	});
	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 0.5],
		['#cdc6fb', '#ebe8fe'],
	);

	return (
		<motion.article
			ref={cardRef}
			className='sticky inset-auto top-[10vh] mb-20 flex h-[80vh] max-h-[46.25rem] justify-between gap-x-10 rounded-[1.75rem] p-12 pr-0'
			style={{ scale, backgroundColor }}
		>
			<div className='flex max-w-[20rem] flex-col justify-between pb-16'>
				<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem]'>
					{title}
				</h3>
				<div className='flex flex-col gap-y-6'>
					<p className='text-2xl leading-[1.8rem] font-normal -tracking-[0.03rem]'>
						{description}
					</p>
					<Link
						className='text-primary group/link flex w-fit items-center gap-x-2 p-0.5 leading-[1.75rem] font-semibold -tracking-[0.005rem]'
						href='#'
					>
						<span className='relative'>
							View Details
							<div className='bg-primary h-px w-0 transition-[width] duration-300 group-hover/link:w-full' />
						</span>
						<ArrowRight className='size-6 text-black transition-transform duration-300 group-hover/link:translate-x-[0.3125rem]' />
					</Link>
				</div>
			</div>
			<div className='h-full w-full max-w-[54.625rem] overflow-hidden rounded-tl-lg rounded-bl-lg'>
				<Image
					alt={title}
					className='h-full w-full object-cover'
					height={500}
					src={image}
					width={874}
				/>
			</div>
		</motion.article>
	);
};
