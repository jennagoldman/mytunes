import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists }) => {
  const artistsListItems = artists.map(artist => (
    <li key={artist.id}>
      <Link to={`/artist/${artist.id}`}>
        <h3>{artist.name}</h3>
      </Link>
    </li>
  ));

  return (
    <section>
      <ul>
        {artistsListItems}
      </ul>
    </section>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistsList;
