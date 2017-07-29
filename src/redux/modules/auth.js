// ACTION CONSTANT
export const SET_AUTH_STATE = 'SET_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';
export const REDIRECT_TO_SIGNUP = 'REDIRECT_TO_SIGNUP';

// ACTION CREATORS
export function setUserLogin(loginProfile) {
    return {
        type: SET_AUTH_STATE,
        payload: loginProfile
    };
}

export function redirectToSignUp(goToSignUp) {
    return {
        type: REDIRECT_TO_SIGNUP,
        payload: goToSignUp
    };
}

export function showLoginError(loginError) {
    return {
        type: SHOW_LOGIN_ERROR,
        payload: loginError
    };
}

// REDUCERS
const initialState = {
    loginProfile: false,
    showLoginError: false,
    goToSignUp: false
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
    case SET_AUTH_STATE:
        const authState = {
            ...state,
            loginProfile: action.payload
        };
        return authState;

    case SHOW_LOGIN_ERROR:
        const loginErrorState = {
            ...state,
            showLoginError: action.payload
        };
        return loginErrorState;

    case REDIRECT_TO_SIGNUP:
        const goToSignUpState = {
            ...state,
            goToSignUp: action.payload
        };
        return goToSignUpState;

    default:
        return state;
    }
}

