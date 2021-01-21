/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import ImageListItem from './ImageListItem';

const ImageList = ({ images }) => {
  return (
    <div className="ImageList">
      {
    images.map((item, index) => {
      return (
        <ImageListItem imgContainer={item} key={index} />
      );
    })
    }
    </div>
  );
};
/*
priorize the font end above everything at the moment, it should be a visualy pleasing front end. we might want to reduce the amout of tests?
*/
export default ImageList;
