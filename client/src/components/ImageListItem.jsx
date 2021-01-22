/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';

const ImageListItem = ({ imgContainer, change, test }) => {
  return (
    <div>
      <button onClick={change} className="ImageListButton">
        <img className="ImageListItem" id={test} src={imgContainer.product_image} alt="test" />
      </button>
    </div>
  );
};

export default ImageListItem;
