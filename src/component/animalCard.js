import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const Secondcont = (props) => {
  const animals = useSelector((state) => state.storeSlice);

  const { handelid } = props;

  return (
    <div className="second-cont">
      {animals.map((animal) => (
        <div key={animal.id} className="phone-card">
          <img className="phone-img" src={animal.img} alt="phone-img" />
          <h5>
            {animal.name}
          </h5>
          <button className="details-button" onClick={handelid} type="button">
            <NavLink className="details-link" id={animal.id} to="Details">Details</NavLink>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Secondcont;

Secondcont.propTypes = {
  handelid: propTypes.func.isRequired,
};
