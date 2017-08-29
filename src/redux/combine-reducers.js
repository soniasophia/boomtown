import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { itemsReducer } from './modules/items';
import { formsReducer } from './modules/forms';
import { authReducer } from './modules/auth';
// import { profileReducer } from './modules/profile';
import client from '../config/apolloClient';
import { shareReducer } from './modules/share';

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    forms: formsReducer,
    form: formReducer,
    share: shareReducer,
    // profile: profileReducer,
    apollo: client.reducer()
});
