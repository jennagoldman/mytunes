import React from 'react';
import { shallow } from 'enzyme';
import ArtistItem from './ArtistItem.jsx';

describe('ArtistsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistItem artistName={'Electric Light Orchestra'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
