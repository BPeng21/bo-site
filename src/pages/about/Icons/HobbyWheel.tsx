import { useEffect, useState, useRef } from 'react';
import Wheel from './../../../assets/wheel.svg';
import type { WheelState } from '../../../types/about-types';
import './HobbyWheel.css';

interface Props {
  setHobbyIndex: (hobbyIndex: number) => void;

  setWheelStatus: (wheelStatus: WheelState) => void;
}

const SPIN_DURATION = 6;

function HobbyWheel({ setHobbyIndex, setWheelStatus }: Props) {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startRotation = useRef(0);
  const controlledSpinRotation = useRef(0);

  function handleMouseDown(event: React.MouseEvent) {
    isDragging.current = true;
    startY.current = event.clientY;
    startRotation.current = rotation % 360;
    document.body.style.cursor = 'grabbing';
    setRotation(startRotation.current);

    setWheelStatus('pending');
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging.current) return;

    const amountMovedY = event.clientY - startY.current;

    setRotation(startRotation.current + amountMovedY / 2);
  }

  function handleMouseUp() {
    isDragging.current = false;
    document.body.style.cursor = 'default';

    let calculatedFinalRotation = 0;

    if (rotation - startRotation.current < 30) {
      setRotation(startRotation.current);

      setWheelStatus('ready');
    } else {
      controlledSpinRotation.current += 15;
      controlledSpinRotation.current %= 75;

      calculatedFinalRotation =
        Math.floor((rotation - startRotation.current) / 30) * 360 +
        controlledSpinRotation.current;

      setRotation(calculatedFinalRotation);

      setTimeout(() => {
        setWheelStatus('spinning');
      }, 0);

      setTimeout(() => {
        setWheelStatus('ready');
        setHobbyIndex((calculatedFinalRotation % 360) / 15);
      }, SPIN_DURATION * 1000);
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [rotation]);

  return (
    <div className="wheel-wrapper">
      <img
        src={Wheel}
        alt="wheel about me"
        className="wheel-image"
        draggable="false"
        onMouseDown={handleMouseDown}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isDragging.current
            ? 'none'
            : `transform ${SPIN_DURATION}s cubic-bezier(0.1, 0.9, 0.2, 1)`,
        }}
      ></img>
    </div>
  );
}

export default HobbyWheel;
