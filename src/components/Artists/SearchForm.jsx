import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, onInputChange, onSearch }) => (
  <section>
    <form onSubmit={onSearch}>
      <input value={searchTerm} onChange={onInputChange} />
      <button>Search</button>
    </form>
  </section>
);

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func
};

export default SearchForm;
