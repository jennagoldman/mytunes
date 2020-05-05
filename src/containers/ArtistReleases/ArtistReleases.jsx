import React, { useState, useEffect } from 'react';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz-api';

const ArtistReleases = () => {
  const [artist, setArtist] = useState({});

  useEffect(() => {
    fetchArtists(id)
      .then(artist => setArtist(artist));
  });
  
  return (
    <h2>Artist Releases</h2>
  );
};

export default ArtistReleases;
