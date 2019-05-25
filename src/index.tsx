import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from '../src/Root';
import App from './App';
import './index.css';


ReactDOM.render(
  <Root>
    <App />
  </Root>
  ,
  document.getElementById('root') as HTMLElement
);
