import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReleaseItem.css';

const ReleaseItem = ({ releaseTitle, releaseId, coverArt }) => (
  <div className={styles.releaseDiv}>
    <h3>{releaseTitle}</h3>
    <img src={ coverArt ? `http://coverartarchive.org/release/${releaseId}/front` : 'https://www.placecage.com/g/250/250'} alt={releaseTitle} />
  </div>
);


ReleaseItem.propTypes = {
  releaseTitle: PropTypes.string.isRequired,
  releaseId: PropTypes.string.isRequired,
  coverArt: PropTypes.bool
};


export default ReleaseItem;
