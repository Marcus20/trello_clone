import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ShowListInputAction } from '../src/actions/index';
import { addListItem } from './reducers/index';
export interface IStoreState {
  showListInput: boolean;
}

// tslint:disable-next-line:no-string-literal
const devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;

const store: any = createStore<IStoreState, ShowListInputAction, any, any>(addListItem, {
  showListInput: false
}, devtools)

export default (props: { children: React.ReactNode; }) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}