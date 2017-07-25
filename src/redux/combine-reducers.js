import { combineReducers } from 'redux';
import { itemsReducer } from './modules/items';
// import { profileReducer } from './modules/profile';
import client from '../config/apolloClient';
import authentication from './modules/auth';

export default combineReducers({
    items: itemsReducer,
    auth: authentication,
    // profile: profileReducer,
    apollo: client.reducer()
});
