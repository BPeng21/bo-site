import { useState } from 'react';
import HobbyWheel from './Icons/HobbyWheel';
import HobbyContent from './HobbyContent/HobbyContent';
import './AboutPage.css'

function AboutPage() {
  const [hobbyIndex, setHobbyIndex] = useState(0);

  return (
    <div>
      <h1 className="sr-only">About Web Developer and Hobbies</h1>
      <HobbyWheel setHobbyIndex={setHobbyIndex} />
      <HobbyContent hobbyIndex={hobbyIndex} />
    </div>
  );
}

export default AboutPage;
