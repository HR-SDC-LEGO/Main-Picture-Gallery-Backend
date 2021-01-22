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
      main: 'https://legoimages.s3-us-west-1.amazonaws.com/Collosium.jpeg',
      startingIndexForImageCarosel: 0,
      endingIndexForCarosel: 7,
    };

    this.getImages = this.getImages.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
    this.carouselDown = this.carouselDown.bind(this);
    this.carouselUP = this.carouselUP.bind(this);
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

  changeMainPicture(e) {
    const { startingIndexForImageCarosel, endingIndexForCarosel } = this.state;
    let targetIndex = Number(e.target.id);
    let difference = 0;
    if (targetIndex > 3) {
      while (targetIndex !== 3) {
        targetIndex -= 1;
        difference -= 1;
      }
      this.setState({
        main: e.target.src,
        startingIndexForImageCarosel: startingIndexForImageCarosel - difference,
        endingIndexForCarosel: endingIndexForCarosel - difference,
      });
    } else if (targetIndex < 3) {
      while (targetIndex !== 3) {
        targetIndex += 1;
        difference += 1;
      }
      this.setState({
        main: e.target.src,
        startingIndexForImageCarosel: startingIndexForImageCarosel + difference,
        endingIndexForCarosel: endingIndexForCarosel + difference,
      });
    } else {
      this.setState({
        main: e.target.src,
      });
    }
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
    if (this.state.images.length !== 0) {
      return (
        <div className="App">
          <ImageList
            images={this.state.images}
            changeMainPicture={this.changeMainPicture}
            carouselUP={this.carouselUP}
            carouselDown={this.carouselDown}
            startingIndexForImageCarosel={this.state.startingIndexForImageCarosel}
            endingIndexForCarosel={this.state.endingIndexForCarosel}
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
