import { useEffect, useState } from 'react';
import { wait } from '../../utilities/time.ts';
import './HeroSection.css';

function HeroSection() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isHelloVisible, setHelloVisible] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [isStartVisible, setIsStartVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    const introSequence = async () => {
      await wait(2000);
      setHelloVisible(false);
      await wait(500);
      setIsPhaseOne(false);
      setIsPhaseTwo(true);
      await wait(100);
      setIsStartVisible(true);
      await wait(1200);
      setIsNameVisible(true);
    };

    introSequence();
  }, []);
  return (
    <section className="hero-section">
      <h1 className="intro-title">
        {isPhaseOne && (
          <span
            className={isHelloVisible ? 'intro-hello' : 'intro-hello hidden'}
          >
            Hello!
          </span>
        )}
        {isPhaseTwo && (
          <span
            className={isStartVisible ? 'intro-start appear' : 'intro-start'}
          >
            My name is
          </span>
        )}
        {isPhaseTwo && (
          <span className={isNameVisible ? 'intro-name appear' : 'intro-name'}>
            Bo Peng
          </span>
        )}
      </h1>
    </section>
  );
}

export default HeroSection;
