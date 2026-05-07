import { useState } from 'react';
import HobbyWheel from './Icons/HobbyWheel';
import HobbyContent from './HobbyContent/HobbyContent';
import SpinArrow from './../../assets/spin-arrow.svg';
import type { WheelState } from '../../types/about-types';
import './AboutPage.css';

function AboutPage() {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  const [wheelStatus, setWheelStatus] = useState<WheelState>('ready');

  console.log(wheelStatus);

  return (
    <main className="site-about">
      <h1 className="sr-only">About Web Developer and Hobbies</h1>
      <div className="full-wheel-comp">
        <HobbyWheel
          setHobbyIndex={setHobbyIndex}
          setWheelStatus={setWheelStatus}
        />
        <img
          src={SpinArrow}
          alt="arrow indicator to spin"
          className="spin-arrow-img"
        />
        <h3 className="wheel-spin-text">Drag to spin!</h3>
      </div>
      <HobbyContent hobbyIndex={hobbyIndex} wheelStatus={wheelStatus} />
    </main>
  );
}

export default AboutPage;
