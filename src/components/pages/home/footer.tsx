import { cn } from '@/lib/utils';

import DroipDIcon from '@/components/icons/droip-d';
import FacebookIcon from '@/components/icons/facebook';
import LinkedInIcon from '@/components/icons/linkedin';
import ThemeumIcon from '@/components/icons/themeum';
import XIcon from '@/components/icons/x';
import YoutubeIcon from '@/components/icons/youtube';

import Link from 'next/link';

const LINKS = [
	{
		title: 'Product',
		items: [
			'Grid & Layouts',
			'Typography',
			'Media Manager',
			'Form Builder',
			'Pop-Up Builder',
			'Interaction & Animations',
			'Accessibility',
		],
	},
	{
		title: 'Company',
		items: ['Affiliates', 'Terms & Privacy', 'Cookie'],
	},
	{
		title: 'Resources',
		items: ['Blog', 'Documentation', 'Release Notes'],
	},
	{
		title: 'Support',
		items: ['Pricing', 'Contact Us'],
	},
];

export const Footer = () => {
	return (
		<footer className='container'>
			<div
				className={cn(
					'grid grid-cols-2 gap-x-6 min-[767px]:[grid-template-columns:0.5fr_1fr_1fr_1fr_1fr] min-[767px]:gap-y-4 min-[992px]:my-0 min-[992px]:grid-cols-5 min-[992px]:py-0',
					'gap-y-12 py-8 min-[575px]:gap-y-8 min-[767px]:my-8',
				)}
			>
				<div className='order-5 flex items-center gap-x-8 gap-y-6 min-[767px]:order-none min-[767px]:flex-col min-[767px]:items-start min-[767px]:gap-x-0'>
					<h3 className='leading-6 font-semibold capitalize'>Social</h3>
					<div className='flex items-center gap-3 min-[767px]:flex-col min-[767px]:items-start'>
						<Link
							className='flex size-8 items-center justify-center overflow-hidden rounded-full'
							href='#'
						>
							<FacebookIcon className='size-[1.125rem] rounded-full' />
						</Link>
						<Link
							className='flex size-8 items-center justify-center overflow-hidden rounded-full'
							href='#'
						>
							<XIcon className='size-[1.125rem] rounded-full' />
						</Link>
						<Link
							className='flex size-8 items-center justify-center overflow-hidden rounded-full'
							href='#'
						>
							<LinkedInIcon className='size-[1.125rem] rounded-full' />
						</Link>
						<Link
							className='flex size-8 items-center justify-center overflow-hidden rounded-full'
							href='#'
						>
							<YoutubeIcon className='size-[1.125rem] rounded-full' />
						</Link>
					</div>
				</div>
				{LINKS.map((link) => (
					<div
						key={link.title}
						className='flex flex-col items-start gap-y-8 min-[575px]:gap-y-6'
					>
						<h3 className='text-base leading-6 font-semibold capitalize min-[992px]:leading-6'>
							{link.title}
						</h3>
						<div className='flex flex-col gap-y-3'>
							{link.items.map((item) => (
								<Link
									key={item}
									className={cn(
										'text-[#605c7a] transition-colors duration-300 hover:text-black min-[992px]:leading-6 min-[992px]:-tracking-[0.01125rem]',
										'text-xs leading-[1.0625rem] -tracking-[0.01rem] min-[575px]:text-sm min-[575px]:leading-5 min-[992px]:text-base',
									)}
									href='#'
								>
									{item}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<div className='mt-20 flex flex-wrap items-center justify-between gap-x-5 gap-y-10 border-t border-[#00000026] pt-[1.375rem] pb-6'>
				<span className='order-last leading-[1.875rem] font-light text-[#00000099] min-[767px]:order-none'>
					© 2025 Droip. All rights reserved
				</span>
				<div className='order-none flex items-center gap-x-2 min-[767px]:order-1'>
					<p className='leading-[1.875rem] font-light text-[#0009]'>
						A Product by
					</p>
					<ThemeumIcon />
				</div>
				<Link
					className='flex min-h-[1.6875rem] items-center gap-x-2 rounded-[0.3125rem] bg-[#9353ff] p-px pl-2 text-[0.8125rem] leading-[1em] font-medium min-[767px]:order-2'
					href='/'
				>
					<DroipDIcon />
					<span className='rounded-[0.25rem] bg-white p-2'>
						Made in my imagination
					</span>
				</Link>
			</div>
		</footer>
	);
};
