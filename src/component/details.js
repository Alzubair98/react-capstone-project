import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux/es/exports';

const Details = (props) => {
  const { buttonId } = props;

  const animals = useSelector((state) => state.storeSlice);
  const animal = animals.filter((item) => item.id === buttonId);

  return (
    <>
      {animal.map((animal) => (
        <div key={animal.id}>
          <div className="img-continer">
            <img className="phone-img" alt="animal-img" src={animal.img} />
          </div>
          <div className="detial-continer">
            <h2>
              Latin Name :
              {animal.latinName}
            </h2>
            <h2>
              Animal Type :
              {animal.type}
            </h2>
            <h2>
              Active Time :
              {animal.time}
            </h2>
            <h2>
              Life Span :
              {animal.life}
            </h2>
            <h2>
              Animal Home :
              {animal.home}
            </h2>
            <h2>
              Animal Habitat :
              {animal.place}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;

Details.propTypes = {
  buttonId: propTypes.number.isRequired,
};
