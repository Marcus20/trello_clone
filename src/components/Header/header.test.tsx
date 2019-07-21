import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';

test('GTA', () => {
  const header = shallow(<Header />);

  console.log(header.find('div').length)
})