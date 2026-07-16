import { useState } from 'react';
import SmallLine from '../Icons/SmallLine';
import BigLine from '../Icons/BigLine';
import SnazzyButton from '../Icons/SnazzyButton';
import type { TechCard } from '../../../types/home-types';
import './TechSummary.css';

interface Props {
  cards: TechCard[];
}

function TechSummary({ cards }: Props) {
  const [isCardOneOpen, setIsCardOneOpen] = useState(false);
  const [isCardTwoOpen, setIsCardTwoOpen] = useState(false);
  const [isCardThreeOpen, setIsCardThreeOpen] = useState(false);

  return (
    <section className="tech-summary">
      <BigLine className="tech-tree" />
      <div className="info-container">
        <div aria-hidden="true" />
        <div className="node-right">
          <SmallLine className="line-one" />
          <SnazzyButton
            className="button-one"
            setIsCardOpen={setIsCardOneOpen}
          />
          {isCardOneOpen && (
            <article className="card-right">
              <h2>{cards[0].title}</h2>
              <p>{cards[0].description}</p>
            </article>
          )}
        </div>
      </div>

      <div className="info-container">
        <div className="node-left">
          <SnazzyButton
            className="button-two"
            setIsCardOpen={setIsCardTwoOpen}
          />
          {isCardTwoOpen && (
            <article className="card-left">
              <h2>{cards[1].title}</h2>
              <p>{cards[1].description}</p>
            </article>
          )}
          <SmallLine className="line-two" />
        </div>
      </div>

      <div className="info-container">
        <div aria-hidden="true" />
        <div className="node-right">
          <SmallLine className="line-three" />
          <SnazzyButton
            className="button-three"
            setIsCardOpen={setIsCardThreeOpen}
          />
          {isCardThreeOpen && (
            <article className="card-right">
              <h2>{cards[2].title}</h2>
              <p>{cards[2].description}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechSummary;
