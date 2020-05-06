import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm.jsx';

describe('SearchForm', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SearchForm searchQuery="electric light orchestra" onInputChange ={() => {}} onSearch={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
