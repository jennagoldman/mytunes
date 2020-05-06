import React from 'react';
import PropTypes from 'prop-types';
import styles from './SongItem.css';

const SongItem = ({ title }) => (
  <div className={styles.songDiv}>
    <h3>{title}</h3>
  </div>
);

SongItem.propTypes = {
  title: PropTypes.string.isRequired
};


export default SongItem;
