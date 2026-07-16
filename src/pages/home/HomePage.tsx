import HeroSection from './HeroSection/HeroSection';
import TechSummary from './TechSummary/TechSummary';
import MeAndCareer from './MeAndCareer/MeAndCareer';
import ChevronDown from './Icons/ChevronDown';
import homeData from '../../data/homepage-data.json';
import { FirstVisitContext } from '../../contexts/FirstVisitContext';
import type { HomepageTypes } from '../../types/home-types';
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import './HomePage.css';
import clsx from 'clsx';

const homeContent = homeData as HomepageTypes;

interface Props {
  setIsFirstVisit: (isFirstVisit: boolean) => void;
}

function HomePage({ setIsFirstVisit }: Props) {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isTreeActive, setIsTreeActive] = useState(false);
  const [isSlideTwo, setIsSlideTwo] = useState(false);
  const slideTwoRef = useRef<HTMLDivElement>(null);

  const isFirstContext = useContext(FirstVisitContext);

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

      setIsSlideTwo(true);
      setIsTreeActive(true);
    }
  }

  useEffect(() => {
    if (isFirstContext) {
      setIsFirstVisit(false);
    }
  }, []);

  return (
    <main className="site-main">
      <HeroSection />
      <div className={clsx('scroll-container', isSlideTwo && 'grown')}>
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
