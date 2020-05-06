import React from 'react';
import { shallow } from 'enzyme';
import ArtistsList from './ArtistsList.jsx';

describe('ArtistsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistsList artists={[{ artistName: 'Electric Light Orchestra' }, { artistName: 'Pretty Lights' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
