import { useState } from 'react';
import HobbyWheel from './Icons/HobbyWheel';
import HobbyContent from './HobbyContent/HobbyContent';
import type { WheelState } from '../../types/about-types';
import './AboutPage.css'



function AboutPage() {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  const [wheelStatus, setWheelStatus] = useState<WheelState>('ready');

  console.log(wheelStatus);

  return (
    <main className="site-about">
      <h1 className="sr-only">About Web Developer and Hobbies</h1>
      <HobbyWheel setHobbyIndex={setHobbyIndex} setWheelStatus={setWheelStatus} />
      <HobbyContent hobbyIndex={hobbyIndex} wheelStatus={wheelStatus} />
    </main>
  );
}

export default AboutPage;
