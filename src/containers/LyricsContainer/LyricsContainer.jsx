import React, { useState, useEffect } from 'react';
import { fetchLyrics } from '../../services/lyrics-ovh.js';
import PropTypes from 'prop-types';

const LyricsContainer = ({ match }) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetchLyrics(match.params.artist, match.params.id)
      .then(lyrics => setLyrics(lyrics));
  }, []);
  
  return (
    // <Lyrics lyrics={lyrics} />
    <p>
      {lyrics}
    </p>
  );
};

LyricsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default LyricsContainer;
