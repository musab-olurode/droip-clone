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
			className='flex gap-x-[1.5625rem] rounded-md bg-transparent p-4 text-black transition-colors duration-300 hover:bg-[#ebe8fe]'
			href={subLink.href}
		>
			{subLink.icon}
			<div className='flex flex-col gap-y-0.5'>
				<div>{subLink.title}</div>
				<div className='text-xs leading-[1.0625rem] opacity-[0.72]'>
					{subLink.subtitle}
				</div>
			</div>
		</Link>
	);
};

export default SubLinkItem;
