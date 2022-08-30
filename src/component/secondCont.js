import React from 'react';
import { useSelector } from 'react-redux';
import Card from './phoneCard';

const Secondcont = () => {
  const animals = useSelector((state) => state.storeSlice);
  return (
    <div className="second-cont">
      {animals.map((animal) => (
        <Card
          key={animal.id}
          name={animal.name}
          src={animal.img}
        />
      ))}
    </div>
  );
};

export default Secondcont;
