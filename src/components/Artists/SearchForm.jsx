import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchQuery, onInputChange, onSearch }) => (
  <section>
    <form onSubmit={onSearch}>
      <input value={searchQuery} onChange={onInputChange} />
      <button>Search</button>
    </form>
  </section>
);

SearchForm.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
