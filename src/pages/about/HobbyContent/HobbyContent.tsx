import clsx from 'clsx';
import type { HobbyInfo, WheelState } from '../../../types/about-types';
import './HobbyContent.css';

interface Props {
  hobbyIndex: number;

  wheelStatus: WheelState;

  hobbiesInfo: HobbyInfo[];
}

function HobbyContent({ hobbyIndex, wheelStatus, hobbiesInfo }: Props) {
  return (
    <article className={clsx('hobby-content', wheelStatus)}>
      <h2 className="hobby-title">{hobbiesInfo[hobbyIndex]?.title}</h2>
      {hobbiesInfo[hobbyIndex]?.descriptions.map((description, index) => (
        <p className="hobby-description" key={index}>
          {description}
        </p>
      ))}
      {hobbiesInfo[hobbyIndex]?.image && 
      <img src={hobbiesInfo[hobbyIndex].image} alt={hobbiesInfo[hobbyIndex].title} className={`${hobbiesInfo[hobbyIndex].id}-img`} />}

      {wheelStatus === 'spinning' && 
      <span className="spinner"></span>
      // <span className="loader">Spinning</span> alternate loader
      }
    </article>
  );
}

export default HobbyContent;
