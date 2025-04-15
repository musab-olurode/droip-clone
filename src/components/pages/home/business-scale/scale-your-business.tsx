'use client';

import { useMemo } from 'react';

import { cn } from '@/lib/utils';

import useTailwindBreakpoints from '@/hooks/use-tailwind-breakpoints';

import { TransitionText } from '@/components/common/transition-text';
import { BusinessScaleCard } from '@/components/pages/home/business-scale/business-scale-card';

export const ScaleYourBusiness = () => {
	const { width } = useTailwindBreakpoints();
	const titleTextLines = useMemo(() => {
		if (width < 992) return 1;

		return 2;
	}, [width]);

	return (
		<section className='bg-black'>
			<div className='container py-16 md:py-32'>
				<div className='max-w-[37.5rem] pb-24'>
					<TransitionText bg='black' lines={titleTextLines}>
						<h2
							className={cn(
								'pointer-events-auto text-[2.875rem] leading-[1.1em] font-medium text-white min-[992px]:text-8xl min-[992px]:-tracking-[0.3125rem]',
								'-tracking-[0.1875rem]',
							)}
						>
							Scale your business with
						</h2>
					</TransitionText>
				</div>
				<div className='flex flex-col gap-y-10'>
					<BusinessScaleCard
						description='Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.'
						image='https://droip.com/wp-content/uploads/2025/03/CMS1.webp'
						title='Content Manager'
					/>
					<BusinessScaleCard
						description='Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.'
						image='https://droip.com/wp-content/uploads/2025/03/Media-Manager.webp'
						title='Media Manager'
					/>
					<BusinessScaleCard
						description="Dynamically update SEO content across pages to optimize your website's search performance."
						image='https://droip.com/wp-content/uploads/2025/03/dymanic-seo2-1.webp'
						title='SEO'
					/>
				</div>
			</div>
		</section>
	);
};
