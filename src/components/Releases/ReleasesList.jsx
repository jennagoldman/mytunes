import React from 'react';
import { Link } from 'react-router-dom';
import ReleaseItem from './ReleaseItem.jsx';
import PropTypes from 'prop-types';
import styles from './ReleasesList.css';

const ReleasesList = ({ artist, releases }) => {
  const releasesListItems = releases.map(release => (
    <li className={styles.releaseListItem} key={release.releaseId}>
      <Link to={`/release/${artist.name}/${release.releaseId}`}>
        <ReleaseItem {...release} />
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

ReleasesList.propTypes = {
  artist: PropTypes.object.isRequired,
  releases: PropTypes.array.isRequired,
  onBrokenImage: PropTypes.func.isRequired
};

export default ReleasesList;
