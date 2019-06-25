import * as constants from '../constants';


export interface IAddListItemAction {
  type: constants.ADD_LIST_ITEM;
  payload: boolean | undefined;
}

export interface IHideListItemAction {
  type: constants.HIDE_LIST_ITEM;
  payload: boolean | undefined;
}

export type ShowListInputAction = IAddListItemAction | IHideListItemAction;

export function addListItem(showListView: boolean | undefined): IAddListItemAction {
  return {
    type: constants.ADD_LIST_ITEM,
    // tslint:disable-next-line:object-literal-sort-keys
    payload: showListView
  }
}

export function hideListItem(showListView: boolean | undefined): IHideListItemAction {
  return {
    type: constants.HIDE_LIST_ITEM,
    // tslint:disable-next-line:object-literal-sort-keys
    payload: showListView
  }
}