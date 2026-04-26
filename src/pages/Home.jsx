import HeroSection from '../components/home/HeroSection';
import TeamSection from '../components/home/TeamSection';
import PortfolioSection from '../components/home/PortfolioSection';
import SupportSection from '../components/home/SupportSection';

export default function Home() {
	return (
		<main className='relative'>
			<HeroSection />
			<TeamSection />
			<PortfolioSection />
			<SupportSection />
		</main>
	);
}
