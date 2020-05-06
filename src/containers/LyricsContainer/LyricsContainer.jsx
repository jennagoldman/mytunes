import React, { useState, useEffect } from 'react';
import Lyrics from '../../components/Lyrics/Lyrics.jsx';
import { fetchLyrics } from '../../services/lyrics-ovh.js';
import PropTypes from 'prop-types';

const LyricsContainer = ({ match }) => {
  const [lyrics, setLyrics] = useState('');

  const artist = match.params.artist;
  const song = match.params.song;

  useEffect(() => {
    fetchLyrics(artist, song)
      .then(lyrics => setLyrics(lyrics));
  }, []);
  
  return (
    <>
      <Lyrics lyrics={lyrics} artist={artist} song={song} />
    </>
  );
};

LyricsContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default LyricsContainer;
