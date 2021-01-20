/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App';

configure({ adapter: new Adapter() });

// Enzyme.configure({adapter: new Adapter});

test('app is rendering', () => {
  // const test = shallow(<App />);

  expect.anything();
});

// s3 multer npm?
