import React, { useState } from 'react';
import SearchForm from '../../components/Artists/SearchForm.jsx';
import ArtistsList from '../../components/Artists/ArtistsLists.jsx';
import Paging from '../../components/Artists/Paging.jsx';

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
