import { useState } from 'react';
import HobbyWheel from './Icons/HobbyWheel';
import HobbyContent from './HobbyContent/HobbyContent';
import type { WheelState, AboutPageTypes } from '../../types/about-types';
import SpinArrow from './Icons/SpinArrow';
import aboutData from './../../data/aboutpage-data.json';
import './AboutPage.css';

const aboutContent = aboutData as AboutPageTypes;

function AboutPage() {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  const [wheelStatus, setWheelStatus] = useState<WheelState>('ready');

  const [isOnWheel, setIsOnWheel] = useState(false);

  console.log(isOnWheel);

  return (
    <main className="site-about">
      <h1 className="sr-only">About Web Developer and Hobbies</h1>
      <div className="full-wheel-comp">
        <HobbyWheel
          setHobbyIndex={setHobbyIndex}
          setWheelStatus={setWheelStatus}
          setIsOnWheel={setIsOnWheel}
        />
        {isOnWheel && (
          <>
            <SpinArrow className="spin-arrow-img" />

            <h3 className="wheel-spin-text">Drag to spin!</h3>
          </>
        )}
        {/* <img
          src={SpinArrow}
          alt="arrow indicator to spin"
          className="spin-arrow-img"
        /> */}
      </div>
      <HobbyContent hobbyIndex={hobbyIndex} wheelStatus={wheelStatus} hobbiesInfo={aboutContent.hobbiesInfo} />
    </main>
  );
}

export default AboutPage;
