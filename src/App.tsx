import * as React from 'react';

import AddList from '../src/components/AddList/AddList';
import Header from '../src/components/Header/Header';
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header logoText="Shmello" />
        <AddList buttonText="Add a list" />
      </div>
    );
  }
}

export default App;
