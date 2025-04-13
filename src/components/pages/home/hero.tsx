import PlayIcon from '@/components/icons/play';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className='container flex flex-col pt-[4.25rem] pb-32'>
			<span className='w-fit rounded-full bg-[#ddd9fd] px-6 py-2.5 text-lg leading-[1.375rem] font-semibold -tracking-[0.045rem]'>
				No-Code WordPress Site Builder
			</span>
			<div className='flex justify-between pt-12 pb-24'>
				<h1 className='text-8xl leading-[6.6rem] font-semibold -tracking-[0.3125rem]'>
					Break Limits. <br />
					Build <span className='text-primary font-medium'>Anything</span>.{' '}
					<br />
					No Code Needed.
				</h1>
				<div className='flex max-w-[19.75rem] flex-col gap-y-1'>
					<div className='rounded-lg bg-[#ebe8fe] p-6 pb-[4.9375rem] text-lg leading-[1.575rem] -tracking-[0.0225rem] text-[#605c7a]'>
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
