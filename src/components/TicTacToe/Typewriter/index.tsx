import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

export default function TypewriterComponent({ text }) {
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typewriterInstance = new Typewriter(typewriterRef.current!, {
      strings: text,
      autoStart: true,
      loop: true,
      pauseFor: 10000,
      deleteSpeed: 50,
      delay: 70,
    });

    return () => {
      typewriterInstance.stop();
    };
  }, [text]);

  return <div style={{ fontSize: '1.5em' }} className='typewriter'><strong>💬[AI Agent]</strong>: <span ref={typewriterRef}></span></div>;
}
