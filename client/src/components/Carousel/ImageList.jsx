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
    this.changeMainPicture = this.changeMainPicture.bind(this);
  }

  carouselUP() {
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    const { images } = this.props;
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

  changeMainPicture(index) {
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    const { setSelectedImageIndex } = this.props;
    let targetIndex = Number(index);
    let difference = 0;
    const middleIndex = endingIndexForCarosel - 3;

    setSelectedImageIndex(index);
    if (targetIndex === middleIndex) {
      return;
    }
    if (targetIndex > middleIndex) {
      while (targetIndex !== middleIndex) {
        targetIndex -= 1;
        difference -= 1;
      }
    } else {
      while (targetIndex !== middleIndex) {
        targetIndex += 1;
        difference += 1;
      }
    }

    this.setState({
      startingIndexForImageCarosel: startingIndexForImageCarosel + difference,
      endingIndexForCarosel: endingIndexForCarosel + difference,
    });
  }

  render() {
    const { images, selectedImageIndex } = this.props;
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    const rangeOfRenderingCarosel = images.slice(startingIndexForImageCarosel, endingIndexForCarosel);
    return (
      <div className="ImageList">
        <button type="button" onClick={this.carouselUP}>up</button>
        {
      rangeOfRenderingCarosel.map((item, index) => {
        const imageIndex = index + startingIndexForImageCarosel;
        return (
          <ImageListItem imgContainer={item} key={imageIndex} handleChange={this.changeMainPicture} id={imageIndex} isSelected={selectedImageIndex === imageIndex} />
        );
      })
        }
        <button type="button" onClick={this.carouselDown}>down</button>
      </div>
    );
  }
}
export default ImageList;
