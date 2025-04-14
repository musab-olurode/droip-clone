import Link from 'next/link';

export type SubLink = {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	href: string;
};

interface Props {
	subLink: SubLink;
}

const SubLinkItem = ({ subLink }: Props) => {
	return (
		<Link
			className='flex items-center gap-x-[1.5625rem] rounded-md bg-transparent p-4 text-black transition-colors duration-300 hover:bg-[#ebe8fe] min-[992px]:items-start'
			href={subLink.href}
		>
			{subLink.icon}
			<div className='flex flex-col gap-y-0.5'>
				<div className='text-sm leading-[1.25rem] font-medium min-[992px]:text-base min-[992px]:leading-[1.4rem] min-[992px]:font-semibold'>
					{subLink.title}
				</div>
				<div className='hidden text-xs leading-[1.0625rem] opacity-[0.72] min-[992px]:inline-block'>
					{subLink.subtitle}
				</div>
			</div>
		</Link>
	);
};

export default SubLinkItem;
