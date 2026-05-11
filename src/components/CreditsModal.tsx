import { useRef } from 'react';
import './CreditsModal.css';

function CreditsModal() {
  const modalRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  function closeModal() {
    if (modalRef.current?.open) {
      modalRef.current.close();
    }
  }

  return (
    <div className="credits-button-and-modal">
      <button className="credits-button" onClick={openModal}>
        Credits & Legal
      </button>
      <dialog ref={modalRef} className="credits-modal">
        <article className="modal-content">
          <button
            className="close-modal"
            aria-label="Close modal"
            onClick={closeModal}
          >
            &times;
          </button>
          <h3 className="projects-credits-header">Project Credits</h3>

          <p>
            UI components by <cite>Simple Design System</cite> by{' '}
            <a
              href="https://www.figma.com/@figma"
              target="_blank"
              rel="noreferrrer"
            >
              Figma
            </a>
          </p>

          <p>
            <a
              href="https://www.magnific.com/free-vector/isometric-pixel-art-beach-scene_27259272.htm#fromView=search&page=1&position=12&uuid=e36b0a50-5879-4ced-b82f-21775393ac65&query=travel+64+bit"
              target="_blank"
              rel="noreferrer"
            >
              Image by freepik
            </a>
          </p>
          <p>
            <a
              href="https://www.magnific.com/free-vector/flat-design-pixel-art-element-collection_38680435.htm#fromView=search&page=1&position=0&uuid=b9b02501-0a21-411d-8d80-d9f6c584772c&query=sports+64+bit"
              target="_blank"
              rel="noreferrer"
            >
              Image by freepik
            </a>
          </p>

          <p>
            <a
              href="https://www.magnific.com/free-vector/cute-girl-gamer-retro-print-kawaii-pixel-y2k-set_274486051.htm#fromView=search&page=1&position=1&uuid=4d821b91-4d88-4144-9090-147ccbd24514&query=controller+64bit"
              target="_blank"
              rel="noreferrer"
            >
              Image by upklyak on Magnific
            </a>
          </p>

          <p>
            <a
              href="https://www.magnific.com/free-vector/retro-arcade-cabinet-isolated-white-background_23723044.htm#fromView=search&page=2&position=0&uuid=f2f901ac-f70e-40c0-b3cf-108757a4e677&query=arcade-64+bit"
              target="_blank"
              rel="noreferrer"
            >
              Image by brgfx on Magnific
            </a>
          </p>
        </article>
      </dialog>
    </div>
  );
}

export default CreditsModal;
