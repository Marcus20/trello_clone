import * as React from 'react';
import AddList from '../../containers/AddList/AddList';

const Home: React.FC = () => (
  <div>
    <AddList
      buttonText="Create board"
    />
  </div>
);

export default Home;