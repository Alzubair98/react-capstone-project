import React from 'react';
import propTypes from 'prop-types';

import Secondcont from './animalCard';

const Fullphone = (props) => {
  const { handelid } = props;
  return (
    <>
      <div className="glitch" data-text="ANIMALS">ANIMALS</div>
      <Secondcont handelid={handelid} />
    </>
  );
};

export default Fullphone;

Fullphone.propTypes = {
  handelid: propTypes.func.isRequired,
};
