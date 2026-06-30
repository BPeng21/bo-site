import { useLocation } from 'react-router';
import './Header.css';
import NavBar from './NavBar';
import clsx from 'clsx';

function Header() {
  const location = useLocation();

  return (
    <header className={clsx("site-header", location.pathname === "/" && "intro")}>
      <NavBar />
    </header>
  );
}

export default Header;
