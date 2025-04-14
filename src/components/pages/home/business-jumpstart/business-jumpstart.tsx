import { cn } from '@/lib/utils';

import RocketIcon from '@/components/icons/rocket';
import { BusinessJumpstartImageSlider } from '@/components/pages/home/business-jumpstart/business-jumpstart-image-slider';

export const BusinessJumpstart = ({
	ref,
}: {
	ref?: React.RefObject<HTMLDivElement | null>;
}) => {
	return (
		<section ref={ref} className='-mt-[20.625rem] py-20 min-[992px]:py-32'>
			<div className='container flex min-[992px]:justify-end'>
				<h2
					className={cn(
						'text-[2.875rem] leading-[1.1em] font-semibold text-white min-[992px]:max-w-[38.75rem] min-[992px]:text-[4rem] min-[992px]:-tracking-[0.2rem]',
						'max-w-[37.5rem] -tracking-[0.125rem]',
					)}
				>
					Jumpstart your business with beautifully crafted themes and sections
				</h2>
			</div>
			<div className='relative'>
				<div className='mt-12 flex min-h-[41.25rem] flex-col items-start min-[992px]:mt-0 min-[992px]:flex-row'>
					<div className='container'>
						<div
							className={cn(
								'z-10 flex w-auto max-w-[37.5rem] min-w-auto flex-col gap-y-8 min-[992px]:w-[28%] min-[992px]:max-w-none min-[992px]:min-w-[20rem]',
								'mb-10 min-[992px]:mb-0',
							)}
						>
							<RocketIcon />
							<p className='text-2xl leading-[1.8rem] -tracking-[0.03rem] text-white'>
								Launch with ease using stunning, ready-to-use themes & sections
								designed for every need.
							</p>
						</div>
					</div>
					<BusinessJumpstartImageSlider />
				</div>
			</div>
		</section>
	);
};
