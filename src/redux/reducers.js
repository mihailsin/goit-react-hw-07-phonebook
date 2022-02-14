import { combineReducers } from 'redux';
import { itemsSlice } from './items-slice';
import { filterSlice } from './filter-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const itemsPersistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const rootReducer = combineReducers({
  contacts: persistReducer(itemsPersistConfig, contactsReducer),
});
