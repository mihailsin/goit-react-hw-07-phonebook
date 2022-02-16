import { combineReducers } from 'redux';
import { itemsSlice } from './items-slice';
import { filterSlice } from './filter-slice';
import { contactsApi } from './contactsApi';

console.log(contactsApi);

const contactsReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
