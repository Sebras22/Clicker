import { useState, useEffect } from 'react';
import { Bakery } from '../type';

export const useBakeries = () => {
  const [bakeries, setBakeries] = useState<Bakery[]>(() => {
    const savedBakeries = localStorage.getItem('bakeries');
    return savedBakeries ? JSON.parse(savedBakeries) : [];
  });

  useEffect(() => {
    localStorage.setItem('bakeries', JSON.stringify(bakeries));
  }, [bakeries]);

  return [bakeries, setBakeries] as const;
};
