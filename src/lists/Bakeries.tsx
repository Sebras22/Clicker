import React from 'react';
import Bakery from '../assets/Bakery.png'
import './Bakerie.css'

interface Bakery {
  name: string;
  id: number;
}

interface BakeriesListProps {
  bakeries: Bakery[];
}

const Bakeries: React.FC<BakeriesListProps> = ({ bakeries }) => {
  return (
    <div>
      {bakeries.length > 0 ?(
        <>
        <h2>Bakeries</h2>
        <div>{bakeries.length}</div>
        {bakeries.map((bakery) => (
          <><div key={bakery.id}>{bakery.name}</div><img className='Bakery' src={Bakery}/></>
        ))}
   
        </> )
         :
          (
          <></>
      )}
    </div>
  );
};

export default Bakeries;
