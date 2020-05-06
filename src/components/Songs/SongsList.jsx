import React from 'react';
import { Link } from 'react-router-dom';
import SongItem from './SongItem.jsx';
import PropTypes from 'prop-types';

const SongsList = ({ title, songs, artist }) => {
  const songsListItems = songs.map(song => (
    <li key={song.id}>
      <Link to={`/song/${artist}/${song.title}`}>
        <SongItem {...song} />
      </Link>
    </li>
  ));

  return (
    <>
      <h2>{title} - Song List</h2>
      <ul>
        {songsListItems}
      </ul>
    </>
  );
};

SongsList.propTypes = {
  title: PropTypes.string.isRequired,
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default SongsList;
