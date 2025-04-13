import { Nav } from '@/components/common/header/nav';
import { Hero } from '@/components/pages/home/hero';

export const Header = () => {
	return (
		<>
			<Nav />
			<header>
				<Hero />
			</header>
		</>
	);
};
