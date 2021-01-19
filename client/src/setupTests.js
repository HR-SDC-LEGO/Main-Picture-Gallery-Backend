/* eslint-disable no-undef */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import mocha from 'mocha';

// import MyComponent from './MyComponent';
import App from './components/App.jsx';

configure({ adapter: new Adapter() });

describe(App, () => {
  it();
  expect();
});

// describe('MyComponent', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

// s3 multer npm?
