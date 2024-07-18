import { Button } from '@mantine/core';
import React from 'react';
import { useAddBuilds } from './hooks/useAddBuilds';


interface House {
  name: string;
  id: number;
}

interface Houseprops {
  houses: House[];
  trucHouse: (newHouse: House) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddHouse: React.FC<Houseprops> = ({ count, setCount, setPlusSecond, trucHouse, houses }) => {
  const housePrice = houses.length * 110 + 120 * 4;

  return (
    <>
      {count < housePrice ? (
        <Button disabled>Add a house ({housePrice}$)</Button>
      ) : (
        <Button
          onClick={() =>
            useAddBuilds('House', houses, trucHouse, count, setCount, setPlusSecond, 110, 2, )
          }
        >
          Add a house ({housePrice}$)
        </Button>
      )}
    </>
  );
};

export default AddHouse;
