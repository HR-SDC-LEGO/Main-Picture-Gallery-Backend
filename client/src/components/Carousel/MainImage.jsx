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

// eslint-disable-next-line object-curly-newline
const MainImage = ({ main, changeMainPicture, carouselLeft, carouselRight }) => {
  const alert = () => {

  };

  return (
    <div className="MainImage">

      <div className="carouselRight">
        <button type="button" onClick={carouselRight}>-----➤</button>
      </div>

      <div className="MainImageZoom" id="MainImageZoom" onClick={alert}>
        <img src={main} alt="product" />
      </div>

      <div className="carouselLeft">
        <button type="button" onClick={carouselLeft}>ᐊ-----</button>
      </div>

    </div>
  );
};

export default MainImage;
