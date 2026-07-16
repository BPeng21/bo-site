import { useContext, useEffect, useState } from 'react';
import { FirstVisitContext } from '../../../contexts/FirstVisitContext';
import './MeAndCareer.css';
import myPhoto from '../../../assets/website-photo.png';
import clsx from 'clsx';

function MeAndCareer() {
  const isFirstContext = useContext(FirstVisitContext);
  const [skippable, setSkippable] = useState(false);

  useEffect(() => {
    if (!isFirstContext) {
      setSkippable(true);
    }
  }, []);
  return (
    <section className={clsx('me-and-career', skippable && 'seen')}>
      <img className="my-photo" src={myPhoto} />
      <div className="career-caption">
        <h2 className="career-title">Software Developer</h2>
        <h3 className="career-subtitle">Specializing in Web Development</h3>
      </div>
    </section>
  );
}

export default MeAndCareer;
