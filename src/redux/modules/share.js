// ACTION CONSTANT
export const SET_ITEM_IMAGE_URL = 'SET_ITEM_IMAGE_URL';

// ACTION CREATORS
export function setItemImageUrl(imageField) {
    return {
        type: SET_ITEM_IMAGE_URL,
        payload: imageField
    };
}

// REDUCERS
const initialState = {
    imageField: ''
};

export function uploadImageReducer(state = initialState, action) {
    switch (action.type) {
    case SET_ITEM_IMAGE_URL:
        const imageUrlState = {
            ...state,
            imageField: action.payload
        };
        return imageUrlState;

    default:
        return state;
    }
}
