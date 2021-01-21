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
      main: 0,
    };
    this.getImages = this.getImages.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
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

  render() {
    if (this.state.images.length !== 0) {
      return (
        <div className="App">
          <ImageList images={this.state.images} />
          <Current main={this.state.images[this.state.main]} />
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default App;
