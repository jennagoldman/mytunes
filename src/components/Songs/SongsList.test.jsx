import React from 'react';
import { shallow } from 'enzyme';
import SongsList from './SongsList.jsx';

describe('SongsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SongsList 
      artist={'Electric Light Orchestra'}
      title={'Out of the Blue'}
      songs={[
        {
          title: 'Mr. Blue Sky',
          id: '789ghi'
        },
        {
          title: 'It\'s Over',
          id: '345jkl'
        }
      ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
