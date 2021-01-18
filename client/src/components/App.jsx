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
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/lego/products',
      success: (data) => {
        console.log(data);
      },
    });
  }

  render() {
    return (
      <div>App is running</div>
    );
  }
}

export default App;
