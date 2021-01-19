import React from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const productsReq = () => {
      $.ajax({
        method: 'GET',
        url: '/lego/products',
        success: (data) => {
          console.log(data);
          return '200';
        },
      });
    };
    productsReq();
    // we will make a post to the imgs end point, pictures are just hard coded into the right place.
  }

  render() {
    return (
      <div>App is running</div>
    );
  }
}

export default App;
