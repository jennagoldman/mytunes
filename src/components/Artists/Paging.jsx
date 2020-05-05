import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ artists, offset, changeOffset }) => (
  <>
    <button onClick={() => changeOffset(-25)} disabled={offset === 0}>&lt;</button>
    <button onClick={() => changeOffset(25)} disabled={artists.length < 25}>&gt;</button>
  </>
);

Paging.propTypes = {
  artists: PropTypes.array,
  offset: PropTypes.number.isRequired,
  changeOffset: PropTypes.func.isRequired
};

export default Paging;
