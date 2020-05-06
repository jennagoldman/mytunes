import React from 'react';
import { Link } from 'react-router-dom';
import SongItem from './SongItem.jsx';
import PropTypes from 'prop-types';
import styles from './ReleasesList.css';

const SongsList = ({ title, songs }) => {
  const songsListItems = songs.map(song => (
    <li className={styles.songsListItem} key={song.id}>
      <Link to={`/song/${song.id}`}>
        <SongItem {...song} />
      </Link>
    </li>
  ));

  return (
    <>
      <h2>{title} - Release History</h2>
      <ul>
        {songsListItems}
      </ul>
    </>
  );
};

SongsList.propTypes = {
  title: PropTypes.string.isRequired,
  songs: PropTypes.array.isRequired
};

export default ReleasesList;
