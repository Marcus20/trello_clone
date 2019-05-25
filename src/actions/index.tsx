import * as constants from '../constants';


export interface IAddListItemAction {
  type: constants.ADD_LIST_ITEM;
}

export interface IHideListItemAction {
  type: constants.HIDE_LIST_ITEM;
}

export type ShowListInputAction = IAddListItemAction | IHideListItemAction;

export function addListItem(): IAddListItemAction {
  return {
    type: constants.ADD_LIST_ITEM
  }
}

export function hideListItem(): IHideListItemAction {
  return {
    type: constants.HIDE_LIST_ITEM
  }
}