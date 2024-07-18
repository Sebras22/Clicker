import { Button } from '@mantine/core';
import React from 'react';
import { useAddBuilds } from './hooks/useAddBuilds';

interface Fastfood {
  name: string;
  id: number;
}

interface Fastfoodprops {
  fastfoods: Fastfood[];
  trucFastFood: (newFastFood: Fastfood) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddFastFood: React.FC<Fastfoodprops> = ({ count, setCount, setPlusSecond, trucFastFood, fastfoods }) => {
  const fastfoodPrice = fastfoods.length * 1000 + 120 * 4;

  return (
    <>
      {count < fastfoodPrice ? (
        <Button disabled>Add a fastfood ({fastfoodPrice}$)</Button>
      ) : (
        <Button
          onClick={() =>
            useAddBuilds('Fastfood', fastfoods, trucFastFood, count, setCount, setPlusSecond, 1000, 4)
          }
        >
          Add a fastfood ({fastfoodPrice}$)
        </Button>
      )}
    </>
  );
};

export default AddFastFood;
