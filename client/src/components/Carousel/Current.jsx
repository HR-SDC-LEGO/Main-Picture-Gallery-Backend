/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';

const Current = ({ main }) => {
  return (
    <div>
      <button type="button" className="MainImageZoom">
        <img className="MainImage" src={main} alt="product" />
      </button>
    </div>
  );
};

export default Current;
