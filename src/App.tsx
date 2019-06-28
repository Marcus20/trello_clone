import { Router } from '@reach/router';
import * as React from 'react';
import Home from '../src/components/Home/Home';
import Route from './Route';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route component={Home} path="/" />
      </Router>
    );
  }
}

export default App;
