import { Link, Router } from '@reach/router';
import * as React from 'react';
import Home from '../src/components/Home/Home';
import Route from './Route';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="board">Boards</Link>
          <Link onClick={() => console.log('hi')} to="/">Add Boards</Link>
        </nav>

        <Router>
          <Route component={Home} path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
