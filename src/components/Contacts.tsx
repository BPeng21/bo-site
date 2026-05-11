import './Contacts.css'

function Contacts() {
  return (
    <article className="contact-info">
      <h1>Contact Me</h1>
      <address>
        <p>
          Email:{' '}
          <a href="mailto:bo.peng0708@gmail.com">bo.peng0708@gmail.com</a>
        </p>
        <p>
          Telephone: <a href="tel:+12087403320">+1 (208) 740-3320</a>
        </p>
      </address>
    </article>
  );
}

export default Contacts;
