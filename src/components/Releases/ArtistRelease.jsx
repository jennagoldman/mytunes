import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistRelease.css';

const Character = ({ title, id }) => (
  <div className={styles.releaseDiv}>
    <h3>{title}</h3>
    <img src={`http://coverartarchive.org/release/${id}/front`} alt={title} />
  </div>
);

Character.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


export default Character;
