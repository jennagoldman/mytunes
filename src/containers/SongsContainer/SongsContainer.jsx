import React, { useState, useEffect } from 'react';
import SongsList from '../../components/Songs/SongsList.jsx';
import { fetchReleases, fetchSongs } from '../../services/musicbrainz/musicbrainz-api';
import PropTypes from 'prop-types';

const SongsContainer = ({ match }) => {
  const [release, setRelease] = useState({});
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchReleases(match.params.id)
      .then(release => setRelease(release));

    fetchSongs(match.params.id)
      .then(songs => setSongs(songs));
  }, []);
  
  return (
    <SongsList {...release} songs={songs} />
  );
};

SongsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  release: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired
};

export default SongsContainer;
