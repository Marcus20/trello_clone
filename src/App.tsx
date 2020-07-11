import { Link, Router } from '@reach/router';
import * as React from 'react';
import Home from '../src/components/Home/Home';
import Route from './Route';

import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="board">Boards</Link>
        <Link to="/">Add Boards</Link>
      </nav>

      <Router>
        <Route component={Home} path="/" />
      </Router>
    </div>
  );
}

export default App;
