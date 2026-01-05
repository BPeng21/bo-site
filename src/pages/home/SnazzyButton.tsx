import { useState } from 'react';
import './SnazzyButton.css';
import { wait } from '../../utilities/time';

type Props = {
  setIsCardOpen: (isCardOpen: boolean) => void
}

function SnazzyButton({ setIsCardOpen }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  async function pressButton() {
    setIsPressed(true);
    await wait(600);
    setIsCardOpen(true);
  }

  return (
    <svg
      className={isPressed ? 'snazzy-button pressed' : 'snazzy-button'}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={pressButton}
    >
      <path
        d="M40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0ZM40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10ZM40 25C48.2843 25 55 31.7157 55 40C55 48.2843 48.2843 55 40 55C31.7157 55 25 48.2843 25 40C25 31.7157 31.7157 25 40 25Z"
        fill="#0B418E"
      />
      <path
        d="M40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0ZM40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10ZM40 25C48.2843 25 55 31.7157 55 40C55 48.2843 48.2843 55 40 55C31.7157 55 25 48.2843 25 40C25 31.7157 31.7157 25 40 25Z"
        fill="#DC9F9F"
        fillOpacity="0.2"
      />
    </svg>
  );
}

export default SnazzyButton;
