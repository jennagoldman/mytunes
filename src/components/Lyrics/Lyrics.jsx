import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics, artist, song }) => (
  <section>
    <h2>{song}</h2>
    <h3>{artist}</h3>
    <p>{lyrics}</p>
  </section>
);

Lyrics.propTypes = {
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};


export default Lyrics;
