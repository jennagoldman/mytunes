import React, { useState } from 'react';
import SearchForm from '';
import ArtistsList from '';
import Paging from '';

const ArtistsContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchArtists(searchQuery)
      .then(artists => setArtists(artists));
  };

  const handleInput = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <>
      <SearchForm onInputChange={handleInput} onSubmit={handleSearch} />
      <ArtistsList artists={artists} />
      <Paging />
    </>
  );
};

export default ArtistsContainer;
