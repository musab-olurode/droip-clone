'use client';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

export const MobileNavButton = ({
	isExpanded,
	onClick,
}: {
	isExpanded: boolean;
	onClick: () => void;
}) => {
	return (
		<Button
			className='z-10 flex size-[2.375rem] flex-col justify-center gap-y-1 p-0 min-[992px]:hidden'
			variant='link'
			onClick={onClick}
		>
			<div
				className={cn(
					'bg-primary h-0.5 w-[1.125rem] rounded-[0.625rem] transition-transform duration-500',
					isExpanded && 'translate-y-[0.3125rem] rotate-45',
				)}
			/>
			<div
				className={cn(
					'bg-primary h-0.5 w-[1.125rem] rounded-[0.625rem] transition-opacity duration-500',
					isExpanded && 'opacity-0',
				)}
			/>
			<div
				className={cn(
					'bg-primary h-0.5 w-[1.125rem] rounded-[0.625rem] transition-transform duration-500',
					isExpanded && '-translate-y-[0.4375rem] -rotate-45',
				)}
			/>
		</Button>
	);
};
