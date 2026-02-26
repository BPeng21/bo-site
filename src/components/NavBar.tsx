import { Link } from 'react-router';
import NavArrow from './NavArrow';
import { useLocation } from 'react-router';
import './NavBar.css';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="site-nav">
      <ul className="page-links">
        <Link to="/" className="home-link">
          <li>Home</li>
          <NavArrow className={pathname == '/' ? "nav-arrow current" : "nav-arrow"}/>
        </Link>
        <Link to="about" className="about-link">
          <li>About</li>
          <NavArrow className={pathname == '/about' ? "nav-arrow current" : "nav-arrow"}/>
        </Link>
        <Link to="blog" className="blog-link">
          <li>Blog</li>
          <NavArrow className={pathname == '/blog' ? "nav-arrow current" : "nav-arrow"}/>
        </Link>
        <Link to="resume" className="resume-link">
          <li>Resume</li>
          <NavArrow className={pathname == '/resume' ? "nav-arrow current" : "nav-arrow"}/>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
