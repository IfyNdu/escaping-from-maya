import { shallow } from 'enzyme';
import React from 'react';

import Root from './root';


describe('my amazing component', () => {

  it('renders without crashing', () => {

    const app = shallow(<Root />);
    expect(app).toBeTruthy();
  });
});
