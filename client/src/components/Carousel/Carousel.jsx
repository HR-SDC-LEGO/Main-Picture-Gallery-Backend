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

  render() {
    const { images, selectedImageIndex } = this.state;
    if (images.length !== 0) {
      return (
        <div className="Carousel">
          <ImageList
            images={images}
            setSelectedImageIndex={this.setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
          />
          <MainImage main={images[selectedImageIndex].product_image} />
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default Carousel;
