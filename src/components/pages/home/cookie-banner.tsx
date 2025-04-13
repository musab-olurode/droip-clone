'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import CookiesIcon from '@/components/icons/cookies';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

export const CookieBanner = () => {
	const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

	return (
		!hasAcceptedCookies && (
			<div
				className={cn(
					'fixed bottom-6 left-1/2 z-[999] max-w-[66.25rem] -translate-x-1/2 rounded-2xl border border-[#0000001a] bg-white',
					'flex gap-6 p-6 [box-shadow:0.125rem_0.5rem_0.75rem_0px_rgba(0,0,0,.1)]',
				)}
			>
				<div className='flex items-center gap-x-6'>
					<CookiesIcon className='size-8 shrink-0' />
					<p className='max-w-[36.5rem] text-xs leading-[1.125rem] text-[#000c]'>
						Our website uses cookies to improve your browsing experience on our
						website. By continuing to use this website, you agree to their use.
						For details, please check our{' '}
						<Link className='underline' href='#'>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
				<Button
					className='self-end'
					onClick={() => setHasAcceptedCookies(true)}
				>
					Okay
				</Button>
			</div>
		)
	);
};
