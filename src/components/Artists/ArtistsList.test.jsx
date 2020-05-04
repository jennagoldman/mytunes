import React from 'react';
import { shallow } from 'enzyme';
import ArtistsList from './ArtistsList.jsx';

describe('ArtistsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistsList artists={[{ name: 'Electric Light Orchestra' }, { name: 'Pretty Lights' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
