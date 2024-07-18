import { useState, useEffect } from 'react';
import { Market } from '../type';

export const useMarket = () => {
  const [market, setMarket] = useState<Market[]>(() => {
    const savedMarket = localStorage.getItem('market');
    return savedMarket ? JSON.parse(savedMarket) : [];
  });

  useEffect(() => {
    localStorage.setItem('market', JSON.stringify(market));
  }, [market]);

  return [market, setMarket] as const;
};
