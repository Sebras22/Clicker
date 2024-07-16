import React from 'react';

interface House {
  name: string;
  id: number;
}

interface HousesListProps {
  houses: House[];
}

const Houses: React.FC<HousesListProps> = ({ houses }) => {
  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>{house.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Houses;
