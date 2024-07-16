import { Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';

interface Restaurant {
  name: string;
  id: number;
}

interface Restaurantprops {
  restaurants: Restaurant[];
  trucRestaurant: (newRestaurant: Restaurant) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddRestaurant: React.FC<Restaurantprops> = ({ count, setCount, setPlusSecond, trucRestaurant, restaurants }) => {

  const PlusRestaurant = () => {
    const RestaurantCost = restaurants.length * 1000 + 120 * 4;

    if (count >= RestaurantCost) {
        const newRestaurant: Restaurant = { name: `Restaurant ${restaurants.length + 1}`, id: Date.now() };
        trucRestaurant(newRestaurant);
        setCount(prevCount => prevCount - RestaurantCost);
        setPlusSecond(prev => prev + 4);
      }
  };

  const restaurantPrice = restaurants.length * 1000 + 120 * 4;

  return (
    <>
      {count < restaurantPrice ? (
        <Button disabled>Add a restaurant ({restaurantPrice}$)</Button>
      ) : (
        <Button onClick={PlusRestaurant}>Add a restaurant ({restaurantPrice}$)</Button>
      )}
    </>
  );
};

export default AddRestaurant;
