'use client'

import { useEffect } from 'react';

interface CursorEffectProps {
  setBackgroundOpacity: (opacity: number) => void; // Function to set background opacity
}

const CursorEffect: React.FC<CursorEffectProps> = ({ setBackgroundOpacity }) => {
  useEffect(() => {
    const handleMouseMove = () => {
      setBackgroundOpacity(0.1); // Set opacity to 10% when mouse moves
    };

    const handleMouseLeave = () => {
      setBackgroundOpacity(0.7); // Reset opacity when mouse leaves
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [setBackgroundOpacity]);

  return null; // No visual element to render
};

export default CursorEffect; 