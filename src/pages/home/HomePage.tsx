import HeroSection from './HeroSection';
import TechSummary from './TechSummary';
import MeAndCareer from './MeAndCareer';
import ChevronDown from './ChevronDown';
import { useRef, useState, type MouseEvent } from 'react';
import './HomePage.css';
import clsx from 'clsx';

function HomePage() {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isTreeActive, setIsTreeActive] = useState(false);
  const slideTwoRef = useRef<HTMLDivElement>(null);
  // const [isVisible, setIsVisible] = useState(false);
  // const slideRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       } else {
  //         setIsVisible(false);
  //       }
  //       console.log(isVisible);
  //     },
  //     { threshold: 0.6 },
  //   );

  //   if (slideRef.current) {
  //     observer.observe(slideRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

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
          {isTreeActive && <TechSummary />}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
