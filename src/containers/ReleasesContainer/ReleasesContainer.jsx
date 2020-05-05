import React, { useState, useEffect } from 'react';
import ArtistReleases from '../../components/Artist/ArtistReleases.jsx';
import { fetchArtist, fetchArtistReleases } from '../../services/musicbrainz/musicbrainz-api';
import PropTypes from 'prop-types';

const ReleasesContainer = ({ match }) => {
  const [artist, setArtist] = useState({});
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchArtist(match.params.id)
      .then(artist => setArtist(artist));

    fetchArtistReleases(match.params.id)
      .then(releases => setReleases(releases));
  }, []);
  
  return (
    <ArtistReleases artist={artist} releases={releases} />
  );
};

export default ReleasesContainer;

ReleasesContainer.propTypes = {
  match: PropTypes.object.isRequired
};
