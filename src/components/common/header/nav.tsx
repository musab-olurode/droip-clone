'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { MobileNavButton } from '@/components/common/header/mobile-nav-button';
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
				icon: <EditorIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'Editor',
				subtitle: 'Effective Visual Builder',
				href: '/editor',
			},
			{
				icon: (
					<InteractionAndAnimationIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Interaction & Animation',
				subtitle: 'Design interactive websites',
				href: '/interaction',
			},
			{
				icon: <GridIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'Grids & Layouts',
				subtitle: 'Structure more easily',
				href: '/layouts',
			},
			{
				icon: (
					<MediaManagerIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Media Manager',
				subtitle: 'Manage & edit site assets',
				href: '/media',
			},
			{
				icon: <TypographyIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'Typography',
				subtitle: 'Customize your branding',
				href: '/typography',
			},
			{
				icon: <SeoIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'SEO',
				subtitle: 'Optimize your SEO workflow',
				href: '/seo',
			},
			{
				icon: (
					<FormBuilderIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Form Builder',
				subtitle: 'Design any web forms',
				href: '/forms',
			},
			{
				icon: (
					<AccessibilityIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Accessibility',
				subtitle: 'Accessible to everyone',
				href: '/accessibility',
			},
			{
				icon: (
					<PopUpBuilderIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Pop-up Builder',
				subtitle: 'Build pop-ups visually',
				href: '/popups',
			},
			{
				icon: (
					<FigmaToDroipIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Figma to Droip',
				subtitle: 'Turn static design into live websites',
				href: '/figma',
			},
			{
				icon: (
					<ContentManagerIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
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
				icon: <DroipBlogsIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'Droip Blogs',
				subtitle: "Explore what's happening",
				href: '/blogs',
			},
			{
				icon: (
					<DocumentationIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Documentation',
				subtitle: 'Learn from documentation',
				href: '/docs',
			},
			{
				icon: (
					<ReleaseNotesIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
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
				icon: <GetSupportIcon className='size-[1.125rem] min-[992px]:size-6' />,
				title: 'Get Support',
				subtitle: 'Fix your issues with our experts',
				href: '/support',
			},
			{
				icon: (
					<FeatureRequestIcon className='size-[1.125rem] min-[992px]:size-6' />
				),
				title: 'Feature Request',
				subtitle: "Let us know what's missing",
				href: '/feature-request',
			},
			{
				icon: <ContactIcon className='size-[1.125rem] min-[992px]:size-6' />,
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
	const [isExpanded, setIsExpanded] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	const handleMouseEnter = () => {
		// only if the width is greater than 992px
		if (windowWidth > 992) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		// only if the width is greater than 992px
		if (windowWidth > 992) {
			setIsHovered(false);
		}
	};

	const handleClick = () => {
		// only if the width is greater than 992px
		if (windowWidth <= 992 && Comp === 'div') {
			setIsExpanded((prev) => !prev);
		}
	};

	return (
		<li className='list-none'>
			<Comp
				className={cn(
					'group flex shrink-0 cursor-pointer flex-col overflow-visible py-4 leading-4 font-medium text-[#605C7A] min-[992px]:p-2.5 min-[992px]:text-sm',
					'border-b border-[#5641f333] text-lg transition-colors duration-300 hover:text-black min-[992px]:border-none',
				)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
				// To appease the type checker
				{...((Comp === Link && { href }) as { href: string })}
			>
				<div className='flex items-center gap-x-1'>
					{children}
					{subLinks && subLinks.length > 0 && (
						<ChevronDownIcon
							className={cn(
								'size-3 text-[#605C7A] transition-[rotate,color] duration-400 group-hover:text-black min-[992px]:group-hover:rotate-180',
								isExpanded && windowWidth <= 992 ? 'rotate-180' : '',
							)}
						/>
					)}
				</div>
				{subLinks && subLinks.length > 0 && (
					<div
						className={cn(
							'relative w-full',
							'after:absolute after:top-[0.90625rem] after:left-1/2 after:hidden after:-translate-x-1/2 after:border-x-8 after:border-t-0 after:border-b-8 after:border-solid group-hover:after:block',
							'hidden after:border-x-transparent after:border-b-[#ffffffdb] after:backdrop-blur-[0.9375rem] min-[992px]:inline',
						)}
					/>
				)}
				{subLinks && subLinks.length > 0 && (
					<div
						className={cn(
							'grid min-w-[42.125rem] [grid-template-rows:0fr]',
							isHovered &&
								'[grid-template-rows:1fr] transition-[grid-template-rows] duration-300',
							isExpanded && windowWidth <= 992
								? '[grid-template-rows:1fr] transition-[grid-template-rows] duration-300'
								: '',
							windowWidth <= 992 &&
								'transition-[grid-template-rows] duration-300',
							'top-full left-0 z-10 min-[992px]:absolute',
						)}
					>
						<div className='overflow-hidden rounded-lg pt-0 min-[992px]:group-hover:pt-3'>
							<div
								className={cn(
									'w-auto min-w-[42.125rem] grid-cols-2 flex-col gap-x-[1.125rem] gap-y-2 overflow-hidden rounded-lg min-[992px]:grid min-[992px]:p-6',
									'flex flex-col bg-transparent p-0 pt-4 pr-5 [backdrop-filter:blur(0.9375rem)] min-[992px]:bg-[#ffffffdb]',
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
		</li>
	);
};

export const Nav = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isExpanded, setIsExpanded] = useState(false);
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

	useEffect(() => {
		if (typeof window === 'undefined') return;

		if (isExpanded) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isExpanded]);

	return (
		<motion.nav
			animate={{ y: isVisible ? 0 : -100 }}
			className='sticky top-0 left-0 z-50 w-full py-3'
			initial={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div
				className={cn(
					'absolute inset-0 -z-10 h-[3.875rem] bg-[#f5f5f7db] backdrop-blur-[0.9375rem] backdrop-opacity-100 transition-[height,backdrop-filter] duration-500',
					'min-[992px]:h-[4.625rem]',
					isExpanded && 'fixed h-screen bg-[#ffffffb8] backdrop-blur-[4.5rem]',
				)}
			/>
			<div className='container flex items-center justify-between gap-x-16 min-[992px]:justify-start'>
				<Link className='z-10' href='/'>
					<LogoIcon className='h-[1.625rem] w-16' />
				</Link>
				<div
					className={cn(
						'fixed top-[3.875rem] flex grow flex-col gap-x-4 min-[992px]:relative min-[992px]:top-0 min-[992px]:flex-row min-[992px]:items-center',
						'left-0 isolate h-0 w-full overflow-hidden transition-[height,padding] duration-500 min-[992px]:h-fit min-[992px]:w-auto min-[992px]:justify-between',
						isExpanded && 'h-screen pb-20',
						'overflow-y-auto min-[992px]:overflow-visible min-[992px]:pb-0',
					)}
				>
					<ul
						className={cn(
							'relative mx-auto flex max-w-[51.25rem] flex-col gap-x-[0.875rem] px-5 min-[992px]:mx-0 min-[992px]:flex-row min-[992px]:px-0',
							'w-full gap-y-5 pt-12 min-[992px]:w-auto min-[992px]:pt-0',
						)}
					>
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.href}
								href={link.href}
								subLinks={link.subLinks}
							>
								{link.label}
							</NavLink>
						))}
					</ul>
					<div
						className={cn(
							'flex w-full max-w-[51.25rem] flex-col gap-x-6 px-5 min-[992px]:w-auto min-[992px]:flex-row min-[992px]:items-center min-[992px]:px-0',
							'mx-auto gap-y-5 min-[992px]:mx-0',
						)}
					>
						<span className='p-[0.3125rem]'>
							<NavLink href='/signin'>Login</NavLink>
						</span>
						<Link className='flex h-[2.625rem] items-center' href='/pricing'>
							<Button className='hover:h-[2.625rem]'>Get Started</Button>
						</Link>
					</div>
				</div>
				<MobileNavButton
					isExpanded={isExpanded}
					onClick={() => setIsExpanded(!isExpanded)}
				/>
			</div>
		</motion.nav>
	);
};
