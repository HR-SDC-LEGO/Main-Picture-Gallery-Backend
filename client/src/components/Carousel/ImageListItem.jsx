/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import './ImageListItemS.scss';

const ImageListItem = ({ imgContainer, handleChange, id }) => {
  const handleItemClick = () => {
    handleChange(id);
  };

  return (
    <div className="ImageListItem">
      <div onClick={handleItemClick} className="ImageListButton" role="img">
        <img src={imgContainer.product_image} alt="test" />
      </div>
    </div>
  );
};

export default ImageListItem;
