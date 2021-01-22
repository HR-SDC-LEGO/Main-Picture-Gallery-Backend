/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import './MainImageS.scss';

const MainImage = ({ main }) => {
  const alert = () => {
    console.log(('clicked'));
  };

  return (
    <div className="MainImage">
      <div className="MainImageZoom" id="MainImageZoom" onClick={alert}>
        <img src={main} alt="product" />
      </div>
    </div>
  );
};

export default MainImage;
