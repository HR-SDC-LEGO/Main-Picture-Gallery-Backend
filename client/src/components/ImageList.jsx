/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import ImageListItem from './ImageListItem';

const ImageList = ({
  images, changeMainPicture, carouselDown, carouselUP, startingIndexForImageCarosel, endingIndexForCarosel,
}) => {
  const rangeOfRenderingCarosel = images.slice(startingIndexForImageCarosel, endingIndexForCarosel);

  return (
    <div className="ImageList">
      <button type="button" onClick={carouselUP}>up</button>
      {
    rangeOfRenderingCarosel.map((item, index) => {
      return (
        <ImageListItem imgContainer={item} key={index} change={changeMainPicture} test={index} />
      );
    })
      }
      <button type="button" onClick={carouselDown}>down</button>
    </div>
  );
};
/*
priorize the font end above everything at the moment, it should be a visualy pleasing front end. we might want to reduce the amout of tests?
*/
export default ImageList;
