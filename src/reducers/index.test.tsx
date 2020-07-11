import { addListItem, hideListItem } from '../actions/index';
import { ADD_LIST_ITEM, HIDE_LIST_ITEM } from '../constants';


test('should have the correct type dispatched', () => {
  const action = addListItem(true);

  expect(action.type).toBe(ADD_LIST_ITEM);
});

test('should dispatch the correct hide list action type', () => {
  const action = hideListItem(false);

  expect(action.type).toBe(HIDE_LIST_ITEM);
});
