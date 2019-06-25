import { addListItem, hideListItem } from '../index';
import { ADD_LIST_ITEM, HIDE_LIST_ITEM } from '../../constants';

describe('addListItem', () => {
  it('should have the correct type dispatched', () => {
    const action = addListItem(true);

    expect(action.type).toBe(ADD_LIST_ITEM);
  });
});

describe('hideListItem', () => {
  it('should dispatch the correct hide list action type', () => {
    const action = hideListItem(false);

    expect(action.type).toBe(HIDE_LIST_ITEM);
  });
});