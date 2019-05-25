import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ShowListInputAction } from '../src/actions/index';
import { IStoreState } from '../src/index';
import App from './App';
import './index.css';
import { addListItem } from './reducers/index';
export interface IStoreState {
  showListInput: boolean;
}

// tslint:disable-next-line:no-string-literal
const devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;

const store: any = createStore<IStoreState, ShowListInputAction, any, any>(addListItem, {
  showListInput: false
}, devtools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
