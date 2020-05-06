import React from 'react';
import { shallow } from 'enzyme';
import ReleaseItem from './ReleaseItem.jsx';

describe('ReleaseItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ReleaseItem 
      releaseTitle={'Out of the Blue'} 
      releaseId={'123abc'} 
      coverArt={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
