import { ShowListInputAction } from '../actions';
import { ADD_LIST_ITEM, HIDE_LIST_ITEM } from '../constants/index';
import { IStoreState } from '../Root';

export const initialState = {
  showListInput: false
}

export default function addListItem(state = initialState, action: ShowListInputAction): IStoreState {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, showListInput: action.payload };
    case HIDE_LIST_ITEM:
      return { ...state, showListInput: action.payload };
  }
  return state
}