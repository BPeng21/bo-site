import clsx from 'clsx';
import './BigLine.css';

interface Props {
  className?: String;
}

function BigLine({ className }: Props) {
  return (
    <svg
      className={clsx('big-drawn-line', className)}
      width="124"
      height="828"
      viewBox="0 0 124 828"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.4993 0.00100708L61.9475 825.001"
        stroke="black"
        strokeWidth="3"
      />
      <line y1="826.001" x2="124" y2="826.001" stroke="black" strokeWidth="3" />
    </svg>
  );
}

export default BigLine;
