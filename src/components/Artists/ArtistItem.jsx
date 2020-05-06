import React from 'react';
import PropTypes from 'prop-types';

const ArtistItem = ({ artistName }) => (
  <>
    <p>{artistName}</p>
  </>
);

ArtistItem.propTypes = {
  artistName: PropTypes.string.isRequired
};


export default ArtistItem;
