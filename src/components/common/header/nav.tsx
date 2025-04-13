'use client';

import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import SubLinkItem from '@/components/common/header/sub-link-item';
import LogoIcon from '@/components/icons/logo';
import AccessibilityIcon from '@/components/icons/nav/accessibility';
import ContactIcon from '@/components/icons/nav/contact';
import ContentManagerIcon from '@/components/icons/nav/content-manager';
import DocumentationIcon from '@/components/icons/nav/documentation';
import DroipBlogsIcon from '@/components/icons/nav/droip-blogs';
import EditorIcon from '@/components/icons/nav/editor';
import FeatureRequestIcon from '@/components/icons/nav/feature-request';
import FigmaToDroipIcon from '@/components/icons/nav/figma-to-droip';
import FormBuilderIcon from '@/components/icons/nav/form-builder';
import GetSupportIcon from '@/components/icons/nav/get-support';
import GridIcon from '@/components/icons/nav/grid';
import InteractionAndAnimationIcon from '@/components/icons/nav/interaction-and-animation';
import MediaManagerIcon from '@/components/icons/nav/media-manager';
import PopUpBuilderIcon from '@/components/icons/nav/pop-up-builder';
import ReleaseNotesIcon from '@/components/icons/nav/release-notes';
import SeoIcon from '@/components/icons/nav/seo';
import TypographyIcon from '@/components/icons/nav/typography';
import { Button } from '@/components/ui/button';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

const NAV_LINKS = [
	{
		label: 'Home',
		href: '/',
		subLinks: [],
	},
	{
		label: 'Product',
		href: '/products',
		subLinks: [
			{
				icon: <EditorIcon />,
				title: 'Editor',
				subtitle: 'Effective Visual Builder',
				href: '/editor',
			},
			{
				icon: <InteractionAndAnimationIcon />,
				title: 'Interaction & Animation',
				subtitle: 'Design interactive websites',
				href: '/interaction',
			},
			{
				icon: <GridIcon />,
				title: 'Grids & Layouts',
				subtitle: 'Structure more easily',
				href: '/layouts',
			},
			{
				icon: <MediaManagerIcon />,
				title: 'Media Manager',
				subtitle: 'Manage & edit site assets',
				href: '/media',
			},
			{
				icon: <TypographyIcon />,
				title: 'Typography',
				subtitle: 'Customize your branding',
				href: '/typography',
			},
			{
				icon: <SeoIcon />,
				title: 'SEO',
				subtitle: 'Optimize your SEO workflow',
				href: '/seo',
			},
			{
				icon: <FormBuilderIcon />,
				title: 'Form Builder',
				subtitle: 'Design any web forms',
				href: '/forms',
			},
			{
				icon: <AccessibilityIcon />,
				title: 'Accessibility',
				subtitle: 'Accessible to everyone',
				href: '/accessibility',
			},
			{
				icon: <PopUpBuilderIcon />,
				title: 'Pop-up Builder',
				subtitle: 'Build pop-ups visually',
				href: '/popups',
			},
			{
				icon: <FigmaToDroipIcon />,
				title: 'Figma to Droip',
				subtitle: 'Turn static design into live websites',
				href: '/figma',
			},
			{
				icon: <ContentManagerIcon />,
				title: 'Content Manager',
				subtitle: 'Centralized dynamic content management',
				href: '/content',
			},
		],
	},
	{
		label: 'Resources',
		href: '/resources',
		subLinks: [
			{
				icon: <DroipBlogsIcon />,
				title: 'Droip Blogs',
				subtitle: "Explore what's happening",
				href: '/blogs',
			},
			{
				icon: <DocumentationIcon />,
				title: 'Documentation',
				subtitle: 'Learn from documentation',
				href: '/docs',
			},
			{
				icon: <ReleaseNotesIcon />,
				title: 'Release Notes',
				subtitle: "Check what's new",
				href: '/releases',
			},
		],
	},
	{
		label: 'Support',
		href: '/support',
		subLinks: [
			{
				icon: <GetSupportIcon />,
				title: 'Get Support',
				subtitle: 'Fix your issues with our experts',
				href: '/support',
			},
			{
				icon: <FeatureRequestIcon />,
				title: 'Feature Request',
				subtitle: "Let us know what's missing",
				href: '/feature-request',
			},
			{
				icon: <ContactIcon />,
				title: 'Contact',
				subtitle: 'Contact for query',
				href: '/contact',
			},
		],
	},
	{
		label: 'Pricing',
		href: '/pricing',
		subLinks: [],
	},
];

const NavLink = ({
	href,
	children,
	subLinks,
}: {
	href: string;
	children: React.ReactNode;
	subLinks?: {
		icon: React.ReactNode;
		title: string;
		subtitle: string;
		href: string;
	}[];
}) => {
	const Comp = subLinks && subLinks.length > 0 ? 'div' : Link;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Comp
			className={cn(
				'group flex shrink-0 cursor-pointer flex-col overflow-visible p-2.5 text-sm leading-4 font-medium text-[#605C7A]',
				'transition-colors duration-300 hover:text-black',
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			// To appease the type checker
			{...((Comp === Link && { href }) as { href: string })}
		>
			<div className='flex items-center gap-x-1'>
				{children}
				{subLinks && subLinks.length > 0 && (
					<ChevronDownIcon className='size-3 text-[#605C7A] transition-[rotate,color] duration-400 group-hover:rotate-180 group-hover:text-black' />
				)}
			</div>
			{subLinks && subLinks.length > 0 && (
				<div
					className={cn(
						'relative w-full',
						'after:absolute after:top-[0.90625rem] after:left-1/2 after:hidden after:-translate-x-1/2 after:border-x-8 after:border-t-0 after:border-b-8 after:border-solid group-hover:after:block',
						'after:border-x-transparent after:border-b-[#ffffffdb] after:backdrop-blur-[0.9375rem]',
					)}
				/>
			)}
			{subLinks && subLinks.length > 0 && (
				<div
					className={cn(
						'grid min-w-[42.125rem] [grid-template-rows:0fr]',
						isHovered &&
							'[grid-template-rows:1fr] transition-[grid-template-rows] duration-300',
						'absolute top-full left-0 z-10',
					)}
				>
					<div className='overflow-hidden rounded-lg pt-0 group-hover:pt-3'>
						<div
							className={cn(
								'grid w-auto min-w-[42.125rem] grid-cols-2 flex-col gap-x-[1.125rem] gap-y-2 overflow-hidden rounded-lg bg-[#ffffffdb] p-6',
								'[backdrop-filter:blur(0.9375rem)]',
							)}
						>
							{subLinks.map((subLink) => (
								<SubLinkItem key={subLink.href} subLink={subLink} />
							))}
						</div>
					</div>
				</div>
			)}
		</Comp>
	);
};

export const Nav = () => {
	const [isVisible, setIsVisible] = useState(true);
	const { scrollY } = useScroll();
	const lastScrollY = useRef(0);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const currentScrollY = latest;
		const isScrollingUp = currentScrollY < lastScrollY.current;

		if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
			setIsVisible(isScrollingUp);
			lastScrollY.current = currentScrollY;
		}
	});

	return (
		<motion.nav
			animate={{ y: isVisible ? 0 : -100 }}
			className='sticky top-0 left-0 z-50 w-full bg-[#f5f5f7db] py-3'
			initial={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className='absolute inset-0 -z-10 backdrop-blur-[0.9375rem] backdrop-opacity-100' />
			<div className='container flex items-center gap-x-16'>
				<Link href='/'>
					<LogoIcon className='h-[1.625rem] w-16' />
				</Link>
				<div className='flex grow items-center justify-between gap-x-4'>
					<div className='relative flex gap-x-[0.875rem]'>
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.href}
								href={link.href}
								subLinks={link.subLinks}
							>
								{link.label}
							</NavLink>
						))}
					</div>
					<div className='flex items-center gap-x-6'>
						<span className='p-[0.3125rem]'>
							<NavLink href='/signin'>Login</NavLink>
						</span>
						<Link className='flex h-[2.625rem] items-center' href='/pricing'>
							<Button className='hover:h-[2.625rem]'>Get Started</Button>
						</Link>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};
