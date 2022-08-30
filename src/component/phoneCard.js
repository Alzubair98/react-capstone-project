import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {
  const { src, name } = props;

  return (
    <div className="phone-card">
      <img className="phone-img" src={src} alt="phone-img" />
      <h2>
        {name}
      </h2>
      <button type="button">Details</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
};
