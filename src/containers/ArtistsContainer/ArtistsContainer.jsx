import React, { useState, useEffect } from 'react';
import SearchForm from '../../components/Artists/SearchForm.jsx';
import ArtistsList from '../../components/Artists/ArtistsList.jsx';
import Paging from '../../components/Artists/Paging.jsx';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz-api.js';

const ArtistsContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [offset, setOffset] = useState(0);
  
  const handleSearch = event => {
    event.preventDefault();
    fetchArtists(searchTerm, offset)
      .then(artists => setArtists(artists));
  };

  const handleInput = ({ target }) => {
    setSearchTerm(target.value);
  };

  const changeOffset = (by) => {
    setOffset(prevOffset => prevOffset + by);
  };

  useEffect(() => {
    if(offset > 0) {
      fetchArtists(searchTerm, offset)
        .then(fetchedArtists => setArtists(fetchedArtists));
    }
  }, [offset]);

  return (
    <>
      <SearchForm searchTerm={searchTerm} onInputChange={handleInput} onSearch={handleSearch} />
      <Paging offset={offset} artists={artists} changeOffset={changeOffset} />
      { artists && <ArtistsList artists={artists} /> }
    </>
  );
};

export default ArtistsContainer;
