/* eslint-disable no-undef */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import mocha from 'mocha';

// import MyComponent from './MyComponent';
import App from '../client/src/components/App';

configure({ adapter: new Adapter() });

describe(App.getProducts, () => {
  it('should get a 200 status for successfully req & res', () => {
    const test = App.getProducts();
    expect(test).toEqual('200');
  });
});

// describe('MyComponent', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

// s3 multer npm?
