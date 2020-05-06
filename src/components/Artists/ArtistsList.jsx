import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItem from './ArtistItem.jsx';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists }) => {
  const artistsListItems = artists.map(artist => (
    <li key={artist.artistId}>
      <Link to={`/artist/${artist.artistId}`}>
        <ArtistItem {...artist} />
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
