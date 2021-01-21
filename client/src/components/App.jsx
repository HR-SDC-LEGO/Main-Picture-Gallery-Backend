/* eslint-disable import/no-named-as-default */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import Current from './Current';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      images: [],
      main: 'https://legoimages.s3-us-west-1.amazonaws.com/Collosium.jpeg', // index
    };

    this.getImages = this.getImages.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
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
    // console.log(query); // works here
    $.ajax({
      method: 'POST',
      data: JSON.stringify(query),
      url: '/lego/products/images',
      success: (imagesData) => {
        this.setState({ images: imagesData });
      },
    });
  }

  changeMainPicture(e) {
    // we will get the product im  id at set that to the siplaying
    // we want to set the clicked item will change the url of the main
    // console.log(e.target.src);
    this.setState({ main: e.target.src });
  }

  carouselUP () {
    // this will change the amount id of pictures we render
    alert('UP');

  }

  carouselDown() {
    // this will change the amount id of pictures we render
    alert('DOWN');
  }

  render() {
    if (this.state.images.length !== 0) {
      return (
        <div className="App">
          <ImageList
            images={this.state.images}
            changeMainPicture={this.changeMainPicture}
            carouselUP={this.carouselUP}
            carouselDown={this.carouselDown}
          />
          <Current main={this.state.main} />
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default App;
