import { combineReducers } from 'redux';
import { itemsReducer } from './modules/items';
import { formsReducer } from './modules/forms';
import { authReducer } from './modules/auth';
// import { profileReducer } from './modules/profile';
import client from '../config/apolloClient';

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    forms: formsReducer,
    // profile: profileReducer,
    apollo: client.reducer()
});
