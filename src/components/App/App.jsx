import React from 'react';
import Header from '../Header/Header.jsx';
import ArtistsContainer from '../../containers/ArtistsContainer/ArtistsContainer.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer/ReleasesContainer.jsx';
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
        </Switch>
      </Router>
    </>
  );
}
  
