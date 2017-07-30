// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
export const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';
export const UPDATE_BIO_FIELD = 'UPDATE_BIO-FIELD';

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

export function updateFullnameField(fullnameField) {
    return {
        type: UPDATE_FULLNAME_FIELD,
        payload: fullnameField
    };
}

export function updateBioField(bioField) {
    return {
        type: UPDATE_BIO_FIELD,
        payload: bioField
    };
}

// REDUCERS
const initialState = {
    emailField: '',
    passwordField: '',
    fullnameField: '',
    bioField: ''
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

    case UPDATE_FULLNAME_FIELD:
        const fullnameState = {
            ...state,
            fullnameField: action.payload
        };
        return fullnameState;

    case UPDATE_BIO_FIELD:
        const bioState = {
            ...state,
            bioField: action.payload
        };
        return bioState;

    default:
        return state;
    }
}
