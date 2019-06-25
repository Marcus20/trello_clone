import { ShowListInputAction } from '../actions';
import { ADD_LIST_ITEM, HIDE_LIST_ITEM } from '../constants/index';
import { IStoreState } from '../Root';

export function addListItem(state: IStoreState, action: ShowListInputAction): IStoreState {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, showListInput: action.payload };
    case HIDE_LIST_ITEM:
      return { ...state, showListInput: action.payload };
  }
  return state
}