/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';

const Current = ({ main }) => {
  const image = main.product_image;
  return (
    <img className="MainImage" src={image} alt="product" />
  );
};

export default Current;
