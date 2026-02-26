import HeroSection from './HeroSection';
import TechSummary from './TechSummary';
import MeAndCareer from './MeAndCareer';
import './HomePage.css';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 },
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-main">
      <HeroSection />
      <div className="scroll-container">
        <div className="slide-1">
          <MeAndCareer />
        </div>
        <div className={clsx("slide-2", isVisible? "visible" : "hidden")} ref={slideRef}>
          <TechSummary />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
