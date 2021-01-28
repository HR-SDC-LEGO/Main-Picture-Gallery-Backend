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

// eslint-disable-next-line object-curly-newline
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

// <button data-test="mediaviewer-chevron-next" className="Chevrons__ChevronWrapper-ibq7e4-0 gvLhfg">
//   <svg viewBox="0 0 40 40" aria-hidden="true" width="2rem" height="2rem">
//     <g fill="none" fillRule="evenodd" data-darkreader-inline-fill="" style="--darkreader-inline-fill:none;">
//       <rect opacity=".602" width="40" height="40" rx="20" className="ChevronRound__Rect-dhupzz-0 fWTElz" />
//       <path d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z" />
//   </svg>
// </button>

export default MainImage;
