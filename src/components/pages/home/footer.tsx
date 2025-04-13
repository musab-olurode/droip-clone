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
			<div className='grid grid-cols-5 gap-x-6 gap-y-4'>
				<div className='flex flex-col items-start gap-y-6'>
					<h3 className='leading-6 font-semibold capitalize'>Social</h3>
					<div className='flex flex-col gap-y-3'>
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
					<div key={link.title} className='flex flex-col items-start gap-y-6'>
						<h3 className='leading-6 font-semibold capitalize'>{link.title}</h3>
						<div className='flex flex-col gap-y-3'>
							{link.items.map((item) => (
								<Link
									key={item}
									className='leading-6 -tracking-[0.01125rem] text-[#605c7a] transition-colors duration-300 hover:text-black'
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
				<span className='leading-[1.875rem] font-light text-[#00000099]'>
					© 2025 Droip. All rights reserved
				</span>
				<div className='flex items-center gap-x-2'>
					<p className='leading-[1.875rem] font-light text-[#0009]'>
						A Product by
					</p>
					<ThemeumIcon />
				</div>
				<Link
					className='flex min-h-[1.6875rem] items-center gap-x-2 rounded-[0.3125rem] bg-[#9353ff] p-px pl-2 text-[0.8125rem] leading-[1em] font-medium'
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
