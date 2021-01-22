/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import ImageListItem from './ImageListItem';
import './ImageListS.scss';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingIndexForImageCarosel: 0,
      endingIndexForCarosel: 7,
    };
    this.carouselDown = this.carouselDown.bind(this);
    this.carouselUP = this.carouselUP.bind(this);
  }

  carouselUP() {
    const { images, startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    if (images.length - 7 === startingIndexForImageCarosel) {
      return;
    }
    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel + 1,
      endingIndexForCarosel: endingIndexForCarosel + 1,
    });
  }

  carouselDown() {
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    if (startingIndexForImageCarosel === 0) {
      return;
    }
    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel - 1,
      endingIndexForCarosel: endingIndexForCarosel - 1,
    });
  }

  render() {
    const { images, changeMainPicture } = this.props;
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    const rangeOfRenderingCarosel = images.slice(startingIndexForImageCarosel, endingIndexForCarosel);

    return (
      <div className="ImageList">
        <button type="button" onClick={this.carouselUP}>up</button>
        {
      rangeOfRenderingCarosel.map((item, index) => {
        return (
          <ImageListItem imgContainer={item} key={index} handleChange={changeMainPicture} id={index} />
        );
      })
        }
        <button type="button" onClick={this.carouselDown}>down</button>
      </div>
    );
  }
}
export default ImageList;
