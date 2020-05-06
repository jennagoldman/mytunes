import React from 'react';
import { shallow } from 'enzyme';
import ReleasesList from './ReleasesList.jsx';

describe('ReleasesList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ReleasesList 
      artist={{ name: 'Electric Light Orchestra' }}
      releases={[
        { 
          releaseId: '123abc', 
          releaseTitle: 'Out of the Blue', 
          coverArt: true 
        }, 
        { 
          releaseId: '456def', 
          releaseTitle: 'Face the Music', 
          coverArt: true 
        }
      ]} 
      onBrokenImage={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
