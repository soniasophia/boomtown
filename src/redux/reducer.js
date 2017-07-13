import {
  LOAD_ITEMS
} from './actions';

const initialState = {
    loading: true,
    itemsData: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
    case LOAD_ITEMS:
        const stateWithItems = {
            loading: false,
            itemsData: action.payload
        };

        return stateWithItems;

    default:
        return state;
    }
}


  // itemsWithOwners (json data) -> becomes payload of LOAD_ITEMS action -> action.payload becomes itemsData when changing state in LOAD_ITEMS case