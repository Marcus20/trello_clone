import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Root from './Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Root>
      <App />
    </Root>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
