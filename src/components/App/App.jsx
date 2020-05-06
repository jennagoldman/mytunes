import React from 'react';
import Header from '../Header/Header.jsx';
import ArtistsContainer from '../../containers/ArtistsContainer/ArtistsContainer.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';
import SongsContainer from '../../containers/SongsContainer/SongsContainer.jsx';
import LyricsContainer from '../../containers/LyricsContainer/LyricsContainer.jsx';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ArtistsContainer} />
          <Route path="/artist/:id" component={ReleasesContainer} />
          <Route path="/release/:artist/:id" component={SongsContainer} />
          <Route path="/song/:artist/:id" component={LyricsContainer} />
        </Switch>
      </Router>
    </>
  );
}
  
