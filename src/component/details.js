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
        <div key={animal.id} className="detail-continer">
          <div className="img-continer">
            <img className="animal-img" alt="animal-img" src={animal.img} />
          </div>
          <div className="detials-continer">
            <li>
              Latin Name :
              {animal.latinName}
            </li>
            <li>
              Animal Type :
              {animal.type}
            </li>
            <li>
              Active Time :
              {animal.time}
            </li>
            <li>
              Life Span :
              {animal.life}
            </li>
            <li>
              Animal Home :
              {animal.home}
            </li>
            <li>
              Animal Habitat :
              {animal.place}
            </li>
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
