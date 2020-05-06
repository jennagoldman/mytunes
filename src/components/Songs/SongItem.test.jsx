import React from 'react';
import { shallow } from 'enzyme';
import SongItem from './SongItem.jsx';

describe('SongItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SongItem title={'Out of the Blue'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
