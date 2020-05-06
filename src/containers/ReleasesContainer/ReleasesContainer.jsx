import React, { useState, useEffect } from 'react';
import ReleasesList from '../../components/Releases/ReleasesList.jsx';
import { fetchArtist, fetchReleases } from '../../services/musicbrainz-api';
import PropTypes from 'prop-types';

const ReleasesContainer = ({ match }) => {
  const [artist, setArtist] = useState({});
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchArtist(match.params.id)
      .then(artist => setArtist(artist));

    fetchReleases(match.params.id)
      .then(releases => setReleases(releases));
  }, []);

  const handleBrokenImage = e => {
    e.target.src = 'https://www.placecage.com/g/250/250';
  };
  
  return (
    <ReleasesList artist={artist} releases={releases} onBrokenImage={handleBrokenImage} />
  );
};

export default ReleasesContainer;

ReleasesContainer.propTypes = {
  match: PropTypes.object.isRequired
};
