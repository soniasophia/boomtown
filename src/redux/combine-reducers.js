import { combineReducers } from 'redux';
import { itemsReducer } from './modules/items';
import { profileReducer } from './modules/profile';
import client from '../config/apolloClient';

export default combineReducers({
    items: itemsReducer,
    profile: profileReducer,
    apollo: client.reducer()
});
