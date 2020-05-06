import React, { useState, useEffect } from 'react';
import SongsList from '../../components/Songs/SongsList.jsx';
import { fetchRelease, fetchSongs } from '../../services/musicbrainz-api.js';
import PropTypes from 'prop-types';

const SongsContainer = ({ match }) => {
  const [release, setRelease] = useState({});
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState('');

  useEffect(() => {
    fetchRelease(match.params.id)
      .then(release => setRelease(release));

    fetchSongs(match.params.id)
      .then(songs => setSongs(songs));

    setArtist(match.params.artist);
  }, []);
  
  return (
    <SongsList {...release} songs={songs} artist={artist} />
  );
};

SongsContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default SongsContainer;
