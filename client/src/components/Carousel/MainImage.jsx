/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import './MainImageS.scss';
import ImageList from './ImageList';

const MainImage = ({ main, changeMainPicture, carouselDown, carouselUp }) => {
  const alert = () => {
    console.log(('clicked'));
  };
  return (
    <div className="MainImage">
      <button type="button" onClick={carouselDown}>down</button>
      <div className="MainImageZoom" id="MainImageZoom" onClick={alert}>
        <img src={main} alt="product" />
      </div>
      <button type='button' onClick={carouselUp}>up</button>
    </div>
  );
};

export default MainImage;
