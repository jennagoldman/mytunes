import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistReleases = ({ artist, releases }) => {
  const releasesListItems = releases.map(release => (
    <li key={artist.id}>
      <Link to={`/release/${release.id}`}>
        <h3>{release.title}</h3>
        <img src={`http://coverartarchive.org/release/${release.id}/front`} alt={release.title} />
      </Link>
    </li>
  ));

  return (
    <>
      <h2>{artist.name} - Release History</h2>
      <ul>
        {releasesListItems}
      </ul>
    </>
  );
};

ArtistReleases.propTypes = {
  artist: PropTypes.object.isRequired,
  releases: PropTypes.array.isRequired
};

export default ArtistReleases;
