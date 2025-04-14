import { cn } from '@/lib/utils';

import PlayIcon from '@/components/icons/play';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className='container flex flex-col pt-[4.25rem] pb-[4.375rem] min-[992px]:pb-32'>
			<span className='w-fit rounded-full bg-[#ddd9fd] px-6 py-2.5 text-lg leading-[1.375rem] font-semibold -tracking-[0.045rem]'>
				No-Code WordPress Site Builder
			</span>
			<div className='flex flex-col justify-between gap-y-12 pt-12 pb-24 md:flex-row'>
				<h1
					className={cn(
						'h-fit text-[2.875rem] leading-[1.1em] font-semibold -tracking-[0.1875rem] min-[992px]:text-8xl min-[992px]:-tracking-[0.3125rem]',
						'max-w-[25rem] min-[992px]:max-w-[46.5625rem]',
					)}
				>
					Break Limits. Build{' '}
					<span className='text-primary font-medium'>Anything</span>. No Code
					Needed.
				</h1>
				<div className='flex max-w-[26.25rem] flex-col gap-y-[0.375rem] md:max-w-[19.75rem] md:gap-y-1'>
					<div className='rounded-lg p-0 pb-[0.875rem] text-lg leading-[1.575rem] -tracking-[0.0225rem] text-[#605c7a] md:bg-[#ebe8fe] md:p-6 md:pb-[4.9375rem]'>
						Droip is a no-code, drag-and-drop WordPress builder that simplifies
						website creation with powerful capabilities.
					</div>
					<Button className='text-primary h-11 bg-[#ebe8fe] text-base font-semibold hover:bg-[#ddd9fd]'>
						Watch Intro
						<PlayIcon className='size-6' />
					</Button>
					<div className='flex h-[3.25rem] items-center'>
						<Link className='w-full' href='#'>
							<Button className='group h-11 w-full rounded-lg text-lg leading-7 font-normal duration-300 hover:h-[3.25rem]'>
								Get started with Droip
								<span className='ml-[0.875rem] flex items-center'>
									<span className='-mr-[0.875rem] h-0.5 w-0 rounded-[4.8125rem] bg-white transition-[width] duration-300 group-hover:w-3' />
									<ChevronRight className='size-6' />
								</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className='animate-fade-in rounded-sm border-8 border-[#ddd9fd] opacity-0'>
				<Image
					alt='Hero'
					className='h-auto w-full object-cover'
					height={1000}
					sizes='(max-width: 1980px) 100vw, 1980px'
					src='https://droip.com/wp-content/uploads/2025/04/hero-home1.webp'
					width={990}
				/>
			</div>
		</section>
	);
};
