'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';

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
			className={cn(
				'sticky inset-auto flex flex-col justify-between gap-x-10 min-[575px]:p-12 min-[575px]:pr-0 min-[992px]:top-[10vh] min-[992px]:mb-20',
				'min-[767px]:flex-row min-[992px]:h-[80vh] min-[992px]:max-h-[46.25rem] min-[992px]:rounded-[1.75rem]',
				'h-[70vh] max-h-[50rem] rounded-[0.875rem] min-[575px]:top-[15vh] min-[575px]:mb-0',
				'top-[15vh] px-[1.125rem] py-8 min-[575px]:justify-between min-[575px]:gap-y-10',
			)}
			style={{ scale, backgroundColor }}
		>
			<div className='flex max-w-[25rem] flex-col justify-between gap-y-8 pb-16 min-[992px]:max-w-[20rem]! md:max-w-[12.8125rem] md:gap-y-6'>
				<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem]'>
					{title}
				</h3>
				<div className='flex flex-col gap-y-6'>
					<p
						className={cn(
							'text-2xl leading-[1.8rem] font-normal -tracking-[0.03rem] max-[991]:leading-5 max-[991px]:text-base max-[991px]:-tracking-[0.0125rem]',
							'max-[767px]:text-sm max-[767px]:leading-5 max-[767px]:tracking-normal max-[767px]:text-[#605c7a]',
						)}
					>
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
			<div className='w-full max-w-[54.625rem] overflow-hidden rounded-tl-lg rounded-bl-lg min-[575px]:h-full'>
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
