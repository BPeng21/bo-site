import clsx from 'clsx';
import './ChevronDown.css'

interface Props {
  className?: string;
}

function ChevronDown({ className }: Props) {
  return (
    <div className={clsx("content-scroll", className)}>
      <p className="click-info">Click for More!</p>
      <svg
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
