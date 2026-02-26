import './MeAndCareer.css';
import myPhoto from '../../../assets/my-photo.jpg';

function MeAndCareer() {
  return (
    <section className="me-and-career">
      <img className="my-photo" src={myPhoto} />
      <div className="career-caption">
        <h2 className="career-title">Software Developer</h2>
        <h3 className="career-subtitle">Specializing in Web Development</h3>
      </div>
    </section>
  );
}

export default MeAndCareer;
