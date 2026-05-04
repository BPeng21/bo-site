import clsx from 'clsx';
import type { WheelState } from '../../../types/about-types';
import './HobbyContent.css';

interface Props {
  hobbyIndex: number;

  wheelStatus: WheelState;
}

function HobbyContent({ hobbyIndex, wheelStatus }: Props) {
  const hobbiesInfo = [
    {
      title: 'About Me',
      descriptions: [
        'My goal of creating this personal website is to further grow myself as a software developer specifically in the field of web development.  This solo project requires for me to be hands-on in every single aspect of web creation from laying out the groundworks for development to deploying a production-ready website. I hope to hone my professional skills in React with Typescript/Javascript in the making of this website so that I become a backbone of my future software engineering team!',
        'Currently, I am taking a break from my career to broaden my horizon and explore the world. I have taken up an English teaching position in Asia that allows me to experience living and traveling in unique cultures where I get to meet fascinating people and go to wonderful places. This journey has been a spiritually-enriching endeavor and the time spent has been more than worth. With that being said, I know that I cannot stay stagnant with my software development skills in the current job market so in my free time, I have consistently worked on this personal project of mine to sharpen my programming skills in web development. This gives me confidence that once my teaching abroad experience is over, I can immediately jump back into the professional tech work environment.',
      ],
    },
    {
      title: 'Travel',
      descriptions: [
        'I have always wanted to travel, but never had many opportunities to when I was younger. This has really motivated me to take this hiatus from my career to fulfill the dream I always had. I have been to Tokyo, Sapporo, Seoul, Shanghai, Guangzhou, and many more!',
      ],
    },
    {
      title: 'Sports',
      descriptions: [
        'Basketball, football, ping pong, badminton. These are just a few sports that I grew up playing whether casually or competitively.  Sports are something I like to watch as well as actively try to attend in person. I have even gone to Esports events.',
      ],
    },
    {
      title: 'Video Games',
      descriptions: [
        'I grew up as a child with video games right there beside me. From Megaman and Pokemon in my childhood, to Madden and Nba2k in my teenage years, and finally transitioning to Genshin and Valorant now, video games have been a major part of my life. Although the genre of the game I play is always changing, my passion for video games is everlasting.',
      ],
    },
    {
      title: 'Arcade',
      descriptions: [
        'I occasionally enjoy going to the arcade to scratch the itch I have to play on those big old machines. My favorites are the basketball shooting, coin pushers, bowling, and of course, the infamous claw machines.',
      ],
    },
  ];
  return (
    <article className={clsx('hobby-content', wheelStatus)}>
      <h2 className="hobby-title">{hobbiesInfo[hobbyIndex]?.title}</h2>
      {hobbiesInfo[hobbyIndex]?.descriptions.map((description, index) => (
        <p className="hobby-description" key={index}>
          {description}
        </p>
      ))}

      {wheelStatus === 'spinning' && 
      <span className="spinner"></span>
      // <span className="loader">Spinning</span> alternate loader
      }
    </article>
  );
}

export default HobbyContent;
