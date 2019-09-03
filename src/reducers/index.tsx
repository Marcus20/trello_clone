import { IStoreState } from '../Root';

import { combineReducers, ReducersMapObject } from 'redux';
import addListReducer from './addListReducer';

const reducers: ReducersMapObject = {
  addListReducer
}

export const rootReducer = combineReducers<IStoreState>(reducers);