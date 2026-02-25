import HeroSection from './HeroSection/HeroSection';
import TechSummary from './TechSummary/TechSummary';
import MeAndCareer from './MeAndCareer/MeAndCareer';
import ChevronDown from './Icons/ChevronDown';
import homeData from '../../data/homepage-data.json';
import type { HomepageTypes } from '../../types/home-types';
import { useRef, useState, type MouseEvent } from 'react';
import './HomePage.css';
import clsx from 'clsx';

const homeContent = homeData as HomepageTypes;

function HomePage() {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isTreeActive, setIsTreeActive] = useState(false);
  const slideTwoRef = useRef<HTMLDivElement>(null);

  function handleHover(event: MouseEvent<HTMLDivElement>) {
    setIsScrollable(event.type === 'mouseenter');
  }

  function changeSlide() {
    if (slideTwoRef.current) {
      const slideTwoElem = slideTwoRef.current;
      slideTwoElem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setIsTreeActive(true);
    }
  }

  return (
    <main className="site-main">
      <HeroSection />
      <div className="scroll-container">
        <div
          className="slide-1"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <MeAndCareer />
          <ChevronDown
            className={clsx(
              'scroll-down-arrow',
              isScrollable ? 'visible' : 'hidden',
            )}
            onClick={changeSlide}
          />
        </div>
        <div className="slide-2" ref={slideTwoRef}>
          {isTreeActive && <TechSummary cards={homeContent.techCards} />}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
