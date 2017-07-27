// ACTION CONSTANT
export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';

// ACTION CREATORS
export function setUserLogin(loginProfile) {
    return {
        type: SET_USER_LOGIN,
        payload: loginProfile
    };
}

export function showLoginError(loginError) {
    return {
        type: SHOW_LOGIN_ERROR,
        payload: loginError
    };
}

// REDUCERS
export default (state = {
    loginProfile: false,
    showLoginError: false
}, action) => {
    switch (action.type) {
    case SET_USER_LOGIN:
        const loginState = {
            ...state,
            loginProfile: action.payload
        };
        return loginState;

    case SHOW_LOGIN_ERROR:
        const loginErrorState = {
            ...state,
            showLoginError: action.payload
        };
        return loginErrorState;

    default:
        return state;
    }
};

