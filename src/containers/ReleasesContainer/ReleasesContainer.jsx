import React, { useState, useEffect } from 'react';
import ArtistReleases from '../../components/Artist/ArtistReleases.jsx';
import { fetchArtistReleases } from '../../services/musicbrainz/musicbrainz-api';
import PropTypes from 'prop-types';

const ReleasesContainer = ({ match }) => {
  const [artist, setArtist] = useState({});

  useEffect(() => {
    fetchArtistReleases(match.params.id)
      .then(artist => setArtist(artist));
  });
  
  return (
    <ArtistReleases artist={artist} />
  );
};

export default ReleasesContainer;

ReleasesContainer.propTypes = {
  match: PropTypes.object.isRequired
};
