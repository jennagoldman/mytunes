import React from 'react';
import ArtistsContainer from '../../containers/ArtistsContainer/ArtistsContainer.jsx';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={ArtistsContainer} />
        </Switch>
      </Router>
    </>
  );
}
  
