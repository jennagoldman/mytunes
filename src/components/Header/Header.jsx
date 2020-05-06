import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1>myTunes Music Library</h1>
    </Link>
  </header>
);

export default Header;
