import './MeAndCareer.css';
import myPhoto from '../../assets/my-photo.jpg'
import ChevronDown from './ChevronDown';

function MeAndCareer() {
  return (
    <section className="me-and-career">
      <img className="my-photo" src={myPhoto} />
      <div className="career-caption">
        <h2 className="career-title">Software Developer</h2>
        <h3 className="career-subtitle">Specializing in Web Development</h3>
      </div>
      <ChevronDown className="scroll-down-arrow"/>
    </section>
  );
}

export default MeAndCareer;
