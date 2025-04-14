import { cn } from '@/lib/utils';

import ControlIcon from '@/components/icons/dependencies/control';
import MoneyBagIcon from '@/components/icons/dependencies/money-bag';
import PathIcon from '@/components/icons/dependencies/path';
import ShieldIcon from '@/components/icons/dependencies/shield';

export const Dependencies = () => {
	return (
		<section className='container py-16 min-[767px]:py-[4.5rem] min-[992px]:py-32'>
			<h2 className='pb-[4.5rem] text-[2.875rem] leading-[1.1em] font-semibold -tracking-[0.125rem] min-[992]:text-[4rem] min-[992px]:-tracking-[0.2rem]'>
				Low <br />
				third-party <br />
				dependencies
			</h2>
			<div className='relative isolate grid grid-cols-1 gap-px rounded-lg min-[767px]:grid-cols-2 min-[992px]:grid-cols-3'>
				<article
					className={cn(
						'order-2 flex min-h-[10.625rem] w-full flex-col justify-end gap-y-[2.6875rem] rounded-lg bg-white min-[767px]:order-1 min-[767px]:p-12',
						'p-6 min-[767px]:min-h-auto min-[767px]:max-w-[27.4375rem]',
					)}
				>
					<ControlIcon />
					<div className='flex flex-col gap-y-[1.125rem]'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							More control, less reliance
						</h3>
						<p className='text-lg leading-[1.575rem] font-medium -tracking-[0.0225rem] text-[#605c7a]'>
							Get complete control over your website’s performance and
							aesthetics without extra plugins.
						</p>
					</div>
				</article>
				<article
					className={cn(
						'order-1 overflow-hidden rounded-lg bg-white pl-11 min-[992]:min-h-[28.75rem] min-[575px]:min-h-[18.125rem] min-[767px]:order-3 min-[767px]:col-span-2',
						'min-h-auto min-[992px]:order-2',
					)}
				>
					<div className='h-full w-auto'>
						<video autoPlay loop muted className='w-full object-fill'>
							<source
								src='https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0'
								type='video/mp4'
							/>
						</video>
					</div>
				</article>
				<article
					className={cn(
						'order-3 flex w-full flex-col justify-end gap-y-[2.6875rem] rounded-lg bg-white min-[767px]:order-2 min-[767px]:max-w-[27.4375rem]',
						'min-h-[10.625rem] p-6 min-[767px]:min-h-auto min-[767px]:p-12 min-[992px]:order-3',
					)}
				>
					<MoneyBagIcon />
					<div className='flex flex-col gap-y-[1.125rem]'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Cost-effective
						</h3>
						<p className='text-lg leading-[1.575rem] font-medium -tracking-[0.0225rem] text-[#605c7a]'>
							Reduce ongoing costs with built-in tools that let you scale
							seamlessly without extra expenses.
						</p>
					</div>
				</article>
				<article
					className={cn(
						'order-4 flex w-full flex-col justify-end gap-y-[2.6875rem] rounded-lg bg-white min-[767px]:max-w-[27.4375rem] min-[767px]:p-12',
						'min-h-[10.625rem] p-6 min-[767px]:min-h-auto',
					)}
				>
					<PathIcon />
					<div className='flex flex-col gap-y-[1.125rem]'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Simplified workflow
						</h3>
						<p className='text-lg leading-[1.575rem] font-medium -tracking-[0.0225rem] text-[#605c7a]'>
							With everything built in, your design process is streamlined,
							efficient, and hassle-free.
						</p>
					</div>
				</article>
				<article
					className={cn(
						'order-5 flex w-full flex-col justify-end gap-y-[2.6875rem] rounded-lg bg-white min-[767px]:max-w-[27.4375rem] min-[767px]:p-12',
						'min-h-[10.625rem] p-6 min-[767px]:min-h-auto',
					)}
				>
					<ShieldIcon />
					<div className='flex flex-col gap-y-[1.125rem]'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Streamlined & secure
						</h3>
						<p className='text-lg leading-[1.575rem] font-medium -tracking-[0.0225rem] text-[#605c7a]'>
							Fewer external plugins mean fewer vulnerabilities, keeping your
							site secure and lightweight.
						</p>
					</div>
				</article>
				<div className='absolute inset-auto top-[20%] right-[25%] -z-10 size-[28.4375rem] rounded-full bg-[#5641f3a6] opacity-50 [filter:opacity(100%)_blur(8.9375rem)]' />
			</div>
		</section>
	);
};
