/* eslint-disable no-console */
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
    };
    this.carouselUp = this.carouselUp.bind(this);
    this.carouselDown = this.carouselDown.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
    this.carouselRight = this.carouselRight.bind(this);
    this.carouselLeft = this.carouselLeft.bind(this);
  }

  componentDidMount() {
    const { setSelectedImageIndex } = this.props;
    setSelectedImageIndex(3);
  }

  carouselDown() {
    const { startingIndexForImageCarosel } = this.state;
    const { images } = this.props;
    if (images.length - 7 === startingIndexForImageCarosel) {
      return;
    }
    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel + 1,
    });
  }

  carouselUp() {
    const { startingIndexForImageCarosel } = this.state;
    if (startingIndexForImageCarosel === 0) {
      return;
    }
    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel - 1,
    });
  }

  changeMainPicture(index) {
    const { startingIndexForImageCarosel } = this.state;
    const { setSelectedImageIndex } = this.props;
    let targetIndex = Number(index);
    let difference = 0;
    const middleIndex = startingIndexForImageCarosel + 3;
    setSelectedImageIndex(index);
    if (targetIndex === middleIndex) {
      return;
    }
    if (targetIndex > middleIndex) {
      while (targetIndex !== middleIndex) {
        targetIndex -= 1;
        difference += 1;
      }
    } else {
      while (targetIndex !== middleIndex) {
        targetIndex += 1;
        difference -= 1;
      }
    }
    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel + difference,
    });
  }

  carouselRight() {
    const { selectedImageIndex } = this.props;
    this.carouselUp();
    this.changeMainPicture(selectedImageIndex + 1);
  }

  carouselLeft() {
    const { selectedImageIndex } = this.props;
    this.carouselDown();
    this.changeMainPicture(selectedImageIndex - 1);
  }

  render() {
    const { images, selectedImageIndex } = this.props;
    const { startingIndexForImageCarosel } = this.state;
    const rangeOfRenderingCarosel = images.slice(startingIndexForImageCarosel, startingIndexForImageCarosel + 7);
    return (
      <div className="ImageList">

        <div className="carouselRight">
          <button type="button" onClick={this.carouselRight}>-----➤</button>
        </div>

        <button type="button" onClick={this.carouselUp}>up</button>
        {
      rangeOfRenderingCarosel.map((item, index) => {
        const imageIndex = index + startingIndexForImageCarosel;
        return (
          <ImageListItem imgContainer={item} key={imageIndex} handleChange={this.changeMainPicture} id={imageIndex} isSelected={selectedImageIndex === imageIndex} />
        );
      })
        }
        <button type="button" onClick={this.carouselDown}>down</button>

        <div className="carouselLeft">
          <button type="button" onClick={this.carouselLeft}>ᐊ-----</button>
        </div>

      </div>
    );
  }
}

export default ImageList;
