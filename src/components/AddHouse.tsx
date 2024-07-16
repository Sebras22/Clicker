import { Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';

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

  const PlusHouse = () => {
    const houseCost = houses.length * 110 + 120 * 4;

    if (count >= houseCost) {
        const newHouse: House = { name: `House ${houses.length + 1}`, id: Date.now() };
        trucHouse(newHouse);
        setCount(prevCount => prevCount - houseCost);
        setPlusSecond(prev => prev + 2);
      }
  };

  const housePrice = houses.length * 110 + 120 * 4;

  return (
    <>
      {count < housePrice ? (
        <Button disabled>Add a house ({housePrice}$)</Button>
      ) : (
        <Button onClick={PlusHouse}>Add a house ({housePrice}$)</Button>
      )}
    </>
  );
};

export default AddHouse;
