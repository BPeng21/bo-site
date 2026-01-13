import HeroSection from './HeroSection';
import TechSummary from './TechSummary';
import MeAndCareer from './MeAndCareer';
import './HomePage.css'

function HomePage() {
  return (
    <main className="site-main">
      <HeroSection />
      <MeAndCareer />
      {/* <TechSummary /> */}
    </ main>
  );
}

export default HomePage;
