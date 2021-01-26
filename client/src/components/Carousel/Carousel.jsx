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
    };

    this.getImages = this.getImages.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.setSelectedImageIndex = this.setSelectedImageIndex.bind(this);
    this.carouselRight = this.carouselRight.bind(this);
    this.carouselLeft = this.carouselLeft.bind(this);
  }

  componentDidMount() {
    this.getProductsList();
  }

  getProductsList() {
    $.ajax({
      method: 'GET',
      url: '/api/lego/products',
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
      url: '/api/lego/products/images',
      success: (imagesData) => {
        this.setState({ images: imagesData });
      },
    });
  }

  setSelectedImageIndex(index) {
    this.setState({ selectedImageIndex: index });
  }

  carouselRight() { // move up into main img
    const { selectedImageIndex } = this.state;
    this.setSelectedImageIndex(selectedImageIndex + 1);
  }

  carouselLeft() {
    const { selectedImageIndex } = this.state;
    this.setSelectedImageIndex(selectedImageIndex - 1);
  }

  render() {
    const { images, selectedImageIndex, zoom } = this.state;
    if (images.length !== 0) {
      return (
        <div className="Carousel">
          <ImageList
            images={images}
            setSelectedImageIndex={this.setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
          />
          <MainImage main={images[selectedImageIndex].product_image} carouselLeft={this.carouselLeft} carouselRight={this.carouselRight} zoom={zoom} />
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default Carousel;
