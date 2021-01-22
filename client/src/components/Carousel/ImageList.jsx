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
export default ImageList;
