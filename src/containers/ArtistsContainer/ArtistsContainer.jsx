import React, { useState } from 'react';
import SearchForm from '../../components/Artists/SearchForm.jsx';
import ArtistsList from '../../components/Artists/ArtistsList.jsx';
import Paging from '../../components/Artists/Paging.jsx';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz-api.js';

const ArtistsContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  
  const handleSearch = event => {
    event.preventDefault();
    fetchArtists(searchQuery)
      .then(fetchedArtists => setArtists(fetchedArtists));
  };

  const handleInput = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <>
      <SearchForm onInputChange={handleInput} onSearch={handleSearch} />
      <ArtistsList artists={artists} />
      {/* <Paging /> */}
    </>
  );
};

export default ArtistsContainer;
