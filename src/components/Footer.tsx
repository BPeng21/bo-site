import Contacts from './Contacts';
import CreditsModal from './CreditsModal';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Contacts />
        <CreditsModal />
      </div>
      <div className="footer-bottom">
        <small className="copyright-notice">
          &copy; {new Date().getFullYear()} Bo Peng. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
