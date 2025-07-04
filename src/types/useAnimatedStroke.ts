// path: src/types/useAnimatedStroke.ts

import { useState, useEffect } from 'react';

export function useAnimatedStroke(speed = 0.02, initial = 0) {
  const [dash, setDash] = useState(initial);
  useEffect(() => {
    let frame = 0;
    let running = true;
    function animate() {
      if (!running) return;
      setDash((prev) => (prev >= 1 ? 0 : prev + speed));
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      cancelAnimationFrame(frame);
    };
  }, [speed]);
  return dash;
}
