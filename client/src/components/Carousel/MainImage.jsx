/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import './MainImageS.scss';

const MainImage = ({ main }) => {
  return (
    <div className="MainImage">
      <div className="MainImageZoom" id="MainImageZoom">
        <img src={main} alt="product" />
      </div>
    </div>
  );
};

export default MainImage;
