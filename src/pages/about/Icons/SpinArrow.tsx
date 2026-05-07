import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import './SpinArrow.css'

interface Props {
  className?: string;
}

function SpinArrow({ className }: Props) {
  const curveRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (curveRef.current) {
      const totalPathLength = curveRef.current.getTotalLength();
      setLength(totalPathLength);
      console.log(totalPathLength);
    }
  }, []);

  return (
    <svg
      className={clsx('curved-arrow', className)}
      width="111"
      height="464"
      viewBox="0 0 111 507"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        strokeDasharray: length,
        strokeDashoffset: length,
        animation: length > 0 ? 'draw 0.5s forwards' : 'none',
      }}
    >
      <path
        ref={curveRef}
        d="M3.85156 3.18851C114.886 137.308 128.458 238.888 74.8516 462.188"
        stroke="black"
        strokeWidth="10"
      />

      <svg
        className="arrow-head"
        x="48"
        y="450"
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2347 56.3958L7.69971e-05 6.47403e-06L56.0915 20.4156L11.2347 56.3958Z"
          fill="black"
        />
      </svg>
    </svg>
  );
}

export default SpinArrow;
