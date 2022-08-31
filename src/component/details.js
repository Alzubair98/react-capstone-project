import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const animal = useSelector((state) => state.storeSlice);
  console.log(animal);

  return (
    <div>
      <div className="img-continer">
        <image alt="animal-img" src="" />
      </div>
      <div className="detial-continer">
        <h2>Latin Name : animal</h2>
        <h2>Animal Type : bird</h2>
        <h2>Active Time : morning</h2>
        <h2>Life Span : 50 day</h2>
        <h2>Animal Home : home</h2>
        <h2>Animal Habitat : Home</h2>
      </div>
    </div>
  );
};

export default Details;
