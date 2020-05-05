import React from 'react';
import PropTypes from 'prop-types';

const ArtistReleases = ({ artist, releases }) => (
  <>
    <h2>{artist.name} - Release History</h2>
  </>
);

ArtistReleases.propTypes = {
  artist: PropTypes.object.isRequired,
  releases: PropTypes.array.isRequired
};

export default ArtistReleases;
