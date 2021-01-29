/* eslint-disable react/no-did-update-set-state */
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

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
    };
    this.zoomMain = this.zoomMain.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        zoom: false,
      });
    }
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
      <div className="imageBackground">
        <div className="MainImage">
          <div className="carouselRight">
            <button className="button" type="button" onClick={carouselRight}>
              <svg viewBox="0 0 40 40" width="2rem" aria-hidden="true" height="2rem">
                <path d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z" />
              </svg>
            </button>
          </div>

          <div className="MainImageZoom" id="MainImageZoom" onClick={this.zoomMain}>
            {test}
          </div>

          <div className="carouselLeft">
            <button className="button" type="button" onClick={carouselLeft}>
              <svg viewBox="0 0 40 40" width="2rem" aria-hidden="true" height="2rem">
                <path d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainImage;
