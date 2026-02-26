import { NavLink } from 'react-router';
import NavArrow from './NavArrow';
import { useLocation } from 'react-router';
import './NavBar.css';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="site-nav">
      <ul className="page-links">
        <NavLink to="/" className="home-link">
          <li>Home</li>
          <NavArrow className="nav-arrow"/>
        </NavLink>
        <NavLink to="about" className="about-link">
          <li>About</li>
          <NavArrow className="nav-arrow"/>
        </NavLink>
        <NavLink to="blog" className="blog-link">
          <li>Blog</li>
          <NavArrow className="nav-arrow"/>
        </NavLink>
        <NavLink to="resume" className="resume-link">
          <li>Resume</li>
          <NavArrow className="nav-arrow"/>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
