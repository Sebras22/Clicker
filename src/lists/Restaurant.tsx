import React from 'react';

interface restaurant {
  name: string;
  id: number;
}

interface RestaurantsListProps {
    restaurants: restaurant[];
}

const Restaurant: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
