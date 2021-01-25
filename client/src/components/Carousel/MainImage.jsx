/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import Zoom from 'react-img-zoom';
import './MainImageS.scss';
import ImageList from './ImageList';

// eslint-disable-next-line object-curly-newline
class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
    };
    this.zoomMain = this.zoomMain.bind(this);
  }

  zoomMain() {
    const { zoom } = this.state;
    this.setState({
      zoom: !zoom,
    });
  }

  render() {
    const { main, carouselLeft, carouselRight } = this.props;
    const { zoom } = this.state;
    let test = null;
    if (zoom === false) {
      test = <img src={main} alt="product" />;
    } else {
      test = <Zoom img={main} zoomScale={3} width={750} height={600} />;
    }

    return (
      <div className="MainImage">

        <div className="carouselRight">
          <button className="button" type="button" onClick={carouselRight}>❮</button>
        </div>

        <div className="MainImageZoom" id="MainImageZoom" onClick={this.zoomMain}>
          {test}
        </div>

        <div className="carouselLeft">
          <button className="button" type="button" onClick={carouselLeft}>❯</button>
        </div>

      </div>
    );
  }
}

export default MainImage;
