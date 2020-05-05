import React, { useState, useEffect } from 'react';
import SearchForm from '../../components/Artists/SearchForm.jsx';
import ArtistsList from '../../components/Artists/ArtistsList.jsx';
import Paging from '../../components/Artists/Paging.jsx';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz-api.js';

const ArtistsContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [offset, setOffset] = useState(0);
  
  const handleSearch = event => {
    event.preventDefault();
    fetchArtists(searchQuery, offset)
      .then(fetchedArtists => setArtists(fetchedArtists));
  };

  const handleInput = ({ target }) => {
    setSearchQuery(target.value);
  };

  const changeOffset = (by) => {
    setOffset(prevOffset => prevOffset + by);
  };

  useEffect(() => {
    if(offset > 0) {
      fetchArtists(searchQuery, offset)
        .then(fetchedArtists => setArtists(fetchedArtists));
    }
  }, [offset]);

  return (
    <>
      <SearchForm onInputChange={handleInput} onSearch={handleSearch} />
      <ArtistsList artists={artists} />
      <Paging offset={offset} artists={artists} changeOffset={changeOffset} />
    </>
  );
};

export default ArtistsContainer;
