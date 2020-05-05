import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import SearchForm from '../../components/Artists/SearchForm.jsx';
import ArtistsList from '../../components/Artists/ArtistsList.jsx';
import Paging from '../../components/Artists/Paging.jsx';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz-api.js';
const ArtistsContainer = ({ location }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    const query = queryString.parse(location.search);
    setSearchTerm(query.query);
  }, []);

  useEffect(() => {
    if(offset > 0 || offset === 0) {
      fetchArtists(searchTerm, offset)
        .then(fetchedArtists => setArtists(fetchedArtists));
    }
  }, [offset]);

  const handleInput = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    setOffset(0);
  };

  const changeOffset = (by) => {
    setOffset(prevOffset => prevOffset + by);
  };

  return (
    <>
      <SearchForm searchTerm={searchTerm} onInputChange={handleInput} onSearch={handleSearch} />
      <Paging offset={offset} artists={artists} changeOffset={changeOffset} />
      { artists && <ArtistsList artists={artists} /> }
    </>
  );
};

ArtistsContainer.propTypes = {
  location: PropTypes.object
};

export default ArtistsContainer;
