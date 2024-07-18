import React from 'react';
import Burger from '../assets/Restaurant.png'

interface Fastfood {
  name: string;
  id: number;
}

interface FastFoodsListProps {
  fastfoods: Fastfood[];
}

const Fastfoods: React.FC<FastFoodsListProps> = ({ fastfoods }) => {
  return (
    <div>
      {fastfoods.length > 0 ? (
      <>
      <h2>FastFoods</h2>
      <div>{fastfoods.length}</div>   
      <div className='Horizontalflex'>
          {fastfoods.map((fastfood) => (
            <><div>
              <div key={fastfood.id}>{fastfood.name}</div><img src={Burger}/>
              </div>
              </>
          ))}
      
          </div>    
          </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Fastfoods;
