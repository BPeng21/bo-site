import { useContext, useEffect, useState } from 'react';
import { FirstVisitContext } from '../contexts/FirstVisitContext';
import { useLocation } from 'react-router';
import './Header.css';
import NavBar from './NavBar';
import clsx from 'clsx';

function Header() {
  const isFirstContext = useContext(FirstVisitContext);
  const [introSeen, setIntroSeen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!isFirstContext) {
      setIntroSeen(true);
    }
  }, [location.pathname === '/']);

  return (
    <header
      className={clsx(
        'site-header',
        location.pathname === '/' && 'intro',
        introSeen && 'no-intro',
      )}
    >
      <NavBar />
    </header>
  );
}

export default Header;
