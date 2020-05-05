import React from 'react';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists, location }) => {
  const artistsListItems = artists.map(artist => (
    <li key={artist.id}>
      <h3>{artist.name}</h3>
      <h3>{location}</h3>
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
