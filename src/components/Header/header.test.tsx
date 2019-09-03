import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';

test('should render a header div with a title', () => {
  const header = shallow(<Header />);

  expect(header.find('div').length).toBe(1);
  expect(header.find('h1').length).toBe(1);
});