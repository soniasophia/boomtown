// ACTION CONSTANT
export const SET_ITEM_IMAGE_URL = 'SET_ITEM_IMAGE_URL';
export const UPDATE_STEP_INDEX = 'UPDATE_STEP_INDEX';
export const FINISH_FORM = 'FINISH_FORM';

// ACTION CREATORS
export function setItemImageUrl(imageField) {
    return {
        type: SET_ITEM_IMAGE_URL,
        payload: imageField
    };
}

export function updateStepIndex(stepIndex) {
    return {
        type: UPDATE_STEP_INDEX,
        payload: stepIndex
    };
}

export function finishForm(bool) {
    return {
        type: FINISH_FORM,
        payload: bool
    };
}

export function resetShareForm() {
    return (dispatch) => {
        dispatch(updateStepIndex(0));
        dispatch(finishForm(false));
    };
}

// REDUCERS
const initialState = {
    imageField: '',
    stepIndex: 0,
    finished: false
};

export function shareReducer(state = initialState, action) {
    switch (action.type) {
    case SET_ITEM_IMAGE_URL:
        const imageUrlState = {
            ...state,
            imageField: action.payload
        };
        return imageUrlState;

    case UPDATE_STEP_INDEX:
        const stepIndexState = {
            ...state,
            stepIndex: action.payload
        };
        return stepIndexState;

    case FINISH_FORM:
        const finishFormState = {
            ...state,
            bool: action.payload
        };
        return finishFormState;

    default:
        return state;
    }
}
