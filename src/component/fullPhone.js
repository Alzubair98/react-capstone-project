import React from 'react';
import propTypes from 'prop-types';
import Firstpage from './firstcont';
import Secondcont from './animalCard';

const Fullphone = (props) => {
  const { handelid } = props;
  return (
    <>
      <Firstpage />
      <Secondcont handelid={handelid} />
    </>
  );
};

export default Fullphone;

Fullphone.propTypes = {
  handelid: propTypes.func.isRequired,
};
