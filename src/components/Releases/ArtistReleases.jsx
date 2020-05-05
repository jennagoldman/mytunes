import React from 'react';
import { Link } from 'react-router-dom';
import ArtistRelease from './ArtistRelease.jsx';
import PropTypes from 'prop-types';
import styles from './ArtistReleases.css';

const ArtistReleases = ({ artist, releases, onBrokenImage }) => {
  const releasesListItems = releases.map(release => (
    <li key={artist.id}>
      <Link to={`/release/${release.id}`}>
        <ArtistRelease {...release} onBrokenImage={onBrokenImage} />
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
  releases: PropTypes.array.isRequired,
  onBrokenImage: PropTypes.func.isRequired
};

export default ArtistReleases;
