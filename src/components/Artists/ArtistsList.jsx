import React from 'react';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists }) => {
  const artistsListItems = artists.map(artist => (
    <li key={artist.id}>
      <h3>{artist.name}</h3>
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
