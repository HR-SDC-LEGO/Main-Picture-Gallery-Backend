/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import './CurrentS.scss';

const Current = ({ main }) => {
  return (
    <div className="Current">
      <div className="MainImageZoom">
        <img className="MainImage" src={main} alt="product" />
      </div>
    </div>
  );
};

export default Current;
