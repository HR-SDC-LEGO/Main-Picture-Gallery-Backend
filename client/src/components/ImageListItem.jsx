/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const ImageListItem = ({ imgContainer }) => {
  // console.log(imgContainer);
  return (
    <div>
      <img className="ImageListItem" src={imgContainer.product_image} alt="test" />
    </div>
  );
};

export default ImageListItem;
