// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';

// ACTION CREATORS
export function updateEmailField(emailField) {
    return {
        type: UPDATE_EMAIL_FIELD,
        payload: emailField
    };
}

export function updatePasswordField(passwordField) {
    return {
        type: UPDATE_PASSWORD_FIELD,
        payload: passwordField
    };
}

// REDUCERS
const initialState = {
    emailField: '',
    passwordField: ''
};

export function formsReducer(state = initialState, action) {
    switch (action.type) {
    case UPDATE_EMAIL_FIELD:
        const emailState = {
            ...state,
            emailField: action.payload
        };
        return emailState;

    case UPDATE_PASSWORD_FIELD:
        const passwordState = {
            ...state,
            passwordField: action.payload
        };
        return passwordState;

    default:
        return state;
    }
}
