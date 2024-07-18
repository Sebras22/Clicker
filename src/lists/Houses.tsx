import React from 'react';
import file from '../assets/file.png'
import './Houses.css'

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
      {houses.length > 0 ?(
        <>
        <h2>Houses</h2>
        <div>{houses.length}</div>
        <div  className='HorizontalflexHouse'>

        {houses.map((house) => (
          <><div key={house.id}>{house.name}</div><img src={file}/></>
        ))}
        </div>

          </> )
         :
          (
          <></>
      )}
    </div>
  );
};

export default Houses;
