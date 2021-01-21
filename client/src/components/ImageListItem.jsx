/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const ImageListItem = ({ imgContainer, change }) => {
  // console.log(imgContainer);
  return (
    <div>
      <img className="ImageListItem" src={imgContainer.product_image} alt="test" onClick={change} />
    </div>
  );
};

export default ImageListItem;
