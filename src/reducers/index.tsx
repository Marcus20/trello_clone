import { ShowListInputAction } from '../actions';
import { ADD_LIST_ITEM, HIDE_LIST_ITEM } from '../constants/index';
import { IStoreState } from '../index';

export function addListItem(state: IStoreState, action: ShowListInputAction): IStoreState {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, showListInput: true };
    case HIDE_LIST_ITEM:
      return { ...state, showListInput: false };
  }

  return state
}