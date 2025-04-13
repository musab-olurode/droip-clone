import RocketIcon from '@/components/icons/rocket';
import { BusinessJumpstartImageSlider } from '@/components/pages/home/business-jumpstart/business-jumpstart-image-slider';

export const BusinessJumpstart = ({
	ref,
}: {
	ref?: React.RefObject<HTMLDivElement | null>;
}) => {
	return (
		<section ref={ref} className='-mt-[20.625rem] py-32'>
			<div className='container flex justify-end'>
				<h2 className='max-w-[38.75rem] text-[4rem] leading-[1.1em] font-semibold -tracking-[0.2rem] text-white'>
					Jumpstart your business with beautifully crafted themes and sections
				</h2>
			</div>
			<div className='relative'>
				<div className='container flex min-h-[41.25rem] items-start'>
					<div className='z-10 flex w-[28%] flex-col gap-y-8'>
						<RocketIcon />
						<p className='text-2xl leading-[1.8rem] -tracking-[0.03rem] text-white'>
							Launch with ease using stunning, ready-to-use themes & sections
							designed for every need.
						</p>
					</div>
					<BusinessJumpstartImageSlider />
				</div>
			</div>
		</section>
	);
};
