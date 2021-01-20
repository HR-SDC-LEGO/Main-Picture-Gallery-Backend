/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';

const Current = ({ main }) => {
  const image = main.product_image;
  return (
    <div className="test">
      <img className="mainImage" src={image} alt="product" />
    </div>

  );
};

export default Current;
