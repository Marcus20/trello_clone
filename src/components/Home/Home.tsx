import * as React from 'react';
import AddList from '../AddList/AddList';

const Home: React.FC = () => (
  <div>
    <AddList
      buttonText="Create board"
    />
  </div>
);

export default Home;