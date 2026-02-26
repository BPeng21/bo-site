import clsx from 'clsx';
import './SmallLine.css';

interface Props {
  className?: string;
}

function SmallLine({ className }: Props) {
  return (
    <svg
      className={clsx("small-drawn-line", className)}
      width="401"
      height="123"
      viewBox="0 0 401 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.431022"
        y1="1.43674"
        x2="400.431"
        y2="121.437"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
}

export default SmallLine;
