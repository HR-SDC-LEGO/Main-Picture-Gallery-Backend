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
  }

  componentDidMount() {
    const { setSelectedImageIndex } = this.props;
    setSelectedImageIndex(3);
  }

  componentDidUpdate(prevProps) {
    const { selectedImageIndex } = this.props;
    if (prevProps.selectedImageIndex !== selectedImageIndex) {
      this.changeMainPicture(selectedImageIndex);
    }
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
    let targetIndex = Number(index);
    let difference = 0;
    const middleIndex = startingIndexForImageCarosel + 3;
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

  render() {
    const { images, selectedImageIndex, setSelectedImageIndex } = this.props;
    let { startingIndexForImageCarosel } = this.state;

    if (startingIndexForImageCarosel < 0) {
      startingIndexForImageCarosel = 0;
    } else if (startingIndexForImageCarosel + 7 > images.length) {
      startingIndexForImageCarosel = images.length - 7;
    }

    const rangeOfRenderingCarosel = images.slice(startingIndexForImageCarosel, startingIndexForImageCarosel + 7);
    return (
      <div className="ImageList">

        <button className="buttonUp" type="button" onClick={this.carouselUp}>
          <svg width="18px" height="28px" viewBox="0 0 18 28" aria-hidden="true"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
        </button>

        {
      rangeOfRenderingCarosel.map((item, index) => {
        const imageIndex = index + startingIndexForImageCarosel;
        return (
          <ImageListItem imgContainer={item} key={imageIndex} handleChange={setSelectedImageIndex} id={imageIndex} isSelected={selectedImageIndex === imageIndex} />
        );
      })
        }
        <button className="buttonDown" type="button" onClick={this.carouselDown}>
          <svg width="18px" height="28px" viewBox="0 0 18 28" aria-hidden="true"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
        </button>

      </div>
    );
  }
}

export default ImageList;
