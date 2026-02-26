import { Link } from 'react-router';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul className="page-links">
        <Link to="/" className="home-link">
          <li>Home</li>
        </Link>
        <Link to="about" className="about-link">
          <li>About</li>
        </Link>
        <Link to="blog" className='blog-link'>
          <li>Blog</li>
        </Link>
        <Link to="resume" className="resume-link">
          <li>Resume</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
