import { addListItem } from '../../reducers/index';
import { ADD_LIST_ITEM } from '../../constants';

describe('addListItemReducer', () => {
  it('handles actions of type ADD_LIST_ITEM', () => {
    const action = {
      payload: true,
      type: ADD_LIST_ITEM
    };

    const newState = addListItem(null, action);
    expect(newState).toEqual({ showListInput: true })
  });
})