import { Header } from '@/components/common/header/header';
import { AppIntegration } from '@/components/pages/home/app-integration';
import { ScaleYourBusiness } from '@/components/pages/home/business-scale/scale-your-business';
import { CookieBanner } from '@/components/pages/home/cookie-banner';
import { Dependencies } from '@/components/pages/home/dependencies';
import { DesignAndBuild } from '@/components/pages/home/design-and-build';
import { Features } from '@/components/pages/home/features';
import { Footer } from '@/components/pages/home/footer';
import { GetStartedBanner } from '@/components/pages/home/get-started-banner';
import { Performance } from '@/components/pages/home/performance';
import { PixelAccuracyAndBusinessJumpstart } from '@/components/pages/home/pixel-accuracy/pixel-accuracy-and-business-jumpstart';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Features variant={1} />
				<Features variant={2} />
				<ScaleYourBusiness />
				<PixelAccuracyAndBusinessJumpstart />
				<Dependencies />
				<Performance />
				<AppIntegration />
				<DesignAndBuild />
				<GetStartedBanner />
			</main>
			<Footer />
			<CookieBanner />
		</>
	);
}
