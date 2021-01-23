/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import MainImage from './MainImage';
import ImageList from './ImageList';
import './CarouselS.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      images: [],
      selectedImageIndex: 0,
      startingIndexForImageCarosel: 0,
    };

    this.getImages = this.getImages.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.setSelectedImageIndex = this.setSelectedImageIndex.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
    this.carouselUp = this.carouselUp.bind(this);
    this.carouselDown = this.carouselDown.bind(this);
  }

  componentDidMount() {
    this.getProductsList();
  }

  getProductsList() {
    $.ajax({
      method: 'GET',
      url: '/lego/products',
      success: (data) => {
        this.setState({ products: JSON.parse(data) });
      },
      complete: () => {
        this.getImages();
      },
    });
  }

  getImages(query = this.state.products[0].product_id) {
    $.ajax({
      method: 'POST',
      data: JSON.stringify(query),
      url: '/lego/products/images',
      success: (imagesData) => {
        this.setState({ images: imagesData });
      },
    });
  }

  setSelectedImageIndex(index) {
    this.setState({ selectedImageIndex: index });
  }

  carouselDown() {
    const { startingIndexForImageCarosel, images } = this.state;
    // const { images } = this.props;
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
    // const { setSelectedImageIndex } = this.props;
    let targetIndex = Number(index);
    let difference = 0;
    const middleIndex = startingIndexForImageCarosel + 3;
    this.setSelectedImageIndex(index);
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
    const {
      images, selectedImageIndex, startingIndexForImageCarosel,
    } = this.state;

    if (images.length !== 0) {
      return (
        <div className="Carousel">
          <ImageList
            images={images}
            setSelectedImageIndex={this.setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
            startingIndexForImageCarosel={startingIndexForImageCarosel}
            changeMainPicture={this.changeMainPicture}
            carouselUp={this.carouselUp}
            carouselDown={this.carouselDown}
          />
          <MainImage
            main={images[selectedImageIndex].product_image}
            changeMainPicture={this.changeMainPicture}
            carouselUp={this.carouselUp}
            carouselDown={this.carouselDown}
          />
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default Carousel;
