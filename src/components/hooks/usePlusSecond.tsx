import { useEffect, useRef, useState } from 'react';

export function usePlusSecond(setCount: React.Dispatch<React.SetStateAction<number>>) {
  const [plussecond, setPlusSecond] = useState<number>(() => {
    const savedSecond = localStorage.getItem('seconds');
    return savedSecond !== null ? parseInt(savedSecond) : 0;
  });

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem('seconds', plussecond.toString());
  }, [plussecond]);

  useEffect(() => {
    if (plussecond > 0 && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCount(prevCount => prevCount + plussecond);
      }, 1000) as unknown as number;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [plussecond]);

  return [plussecond, setPlusSecond] as const;
}
