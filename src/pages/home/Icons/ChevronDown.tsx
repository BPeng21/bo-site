import clsx from 'clsx';
import './ChevronDown.css';
import { type MouseEvent, type MouseEventHandler, useState } from 'react';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

function ChevronDown({ className, onClick }: Props) {
  const [onChevron, setOnChevron] = useState(false);

  function handleHover(event: MouseEvent<SVGElement>) {
    setOnChevron(event.type === 'mouseenter');
  }
  return (
    <div className={clsx('content-scroll', className)}>
      <p className={clsx('click-info', onChevron ? 'active' : '')}>
        Click for More!
      </p>
      <svg
        className="chevron-arrows"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={onClick}
        width="150"
        height="100"
        viewBox="0 0 150 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 28.5L75 47.5L112.5 28.5"
          stroke="#1E1E1E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.5 52.5L75 71.5L112.5 52.5"
          stroke="#1E1E1E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ChevronDown;
