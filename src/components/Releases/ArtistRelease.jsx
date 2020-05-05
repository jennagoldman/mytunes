import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistRelease.css';

const Character = ({ title, id, onBrokenImage }) => (
  <div className={styles.releaseDiv}>
    <h3>{title}</h3>
    <img src={`http://coverartarchive.org/release/${id}/front`} onError={onBrokenImage} alt={title} />
  </div>
);


Character.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onBrokenImage: PropTypes.func.isRequired
};


export default Character;
