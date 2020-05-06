import React, { useState, useEffect } from 'react';
import Lyrics from '../../components/Lyrics/Lyrics.jsx';
import { fetchLyrics } from '../../services/lyrics-ovh.js';
import PropTypes from 'prop-types';

const LyricsContainer = ({ match }) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetchLyrics(match.params.artist, match.params.song)
      .then(lyrics => setLyrics(lyrics));
  }, []);
  
  return (
    <>
      <Lyrics lyrics={lyrics} />
    </>
  );
};

LyricsContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default LyricsContainer;
