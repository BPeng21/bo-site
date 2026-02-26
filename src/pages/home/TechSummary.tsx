import { useState } from 'react';
import SmallLine from './SmallLine';
import SnazzyButton from './SnazzyButton';
import './TechSummary.css';

function TechSummary() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <section className="tech-summary">
      <div className="info-container">
        <div aria-hidden="true" />
        <div className="node-right">
          <SmallLine />
          <SnazzyButton setIsCardOpen={setIsCardOpen} />
          {isCardOpen && (
            <article className="card-right">
              <h2>Full-Stack Developer</h2>
              <p>
                A Software developer with 3 years of professional experience
                working with both the front-end and back-end technology, I
                helped build large-scale projects in a highly dynamic
                environment where my adaptability skills were put to the test
                through frequent context switching between projects as well as
                technologies.
              </p>
            </article>
          )}
        </div>
      </div>
      <article className="card-left">
        <h2>React-focused Web Dev</h2>
        <p>
          My primary focus has been react-based web development. I have a strong
          foundation in JavaScript while slowly honing my skills in TypeScript
          with React. In fact, this website is built on Typescript and React!
        </p>
      </article>
      <article className="card-right">
        <h2>Immersive Web Experience</h2>
        <p>
          I strive to develop web applications that give users a great
          experience. I want my website to feel alive, but also keep it easy on
          the eye. Hope you enjoy!
        </p>
      </article>
    </section>
  );
}

export default TechSummary;
