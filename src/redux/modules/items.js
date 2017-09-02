// ACTION CONSTANT
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_FILTER_ITEMS = 'LOAD_FILTER_ITEMS';
export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';
export const SHOW_BORROW_MODAL = 'SHOW_BORROW_MODAL';
export const HIDE_BORROW_MODAL = 'HIDE_BORROW_MODAL';

// ACTION CREATORS
export function loadItems(itemsWithOwners, specificUserItems) {
    return {
        type: LOAD_ITEMS,
        payload: {
            itemsWithOwners,
            specificUserItems
        }
    };
}

export function selectFilterItems(filterValues) {
    return {
        type: SELECT_FILTER_ITEMS,
        payload: filterValues
    };
}

export function showBorrowModal(itemid, itemowner, showModal) {
    return {
        type: SHOW_BORROW_MODAL,
        payload: { itemid, itemowner, showModal }
    };
}

export function hideBorrowModal(hideModal) {
    return {
        type: HIDE_BORROW_MODAL,
        payload: hideModal
    };
}

// REDUCER
const initialState = {
    loading: true,
    filterValues: [],
    itemid: '',
    itemowner: '',
    showBorrowModal: false
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
    case LOAD_ITEMS:
        return {
            ...state,
            loading: false,
            itemsData: action.payload.itemsWithOwners,
            specificUserItems: action.payload.specificUserItems,
        };

    case SELECT_FILTER_ITEMS:
        const filterState = {
            ...state,
            filterValues: action.payload
        };
        return filterState;

    case SHOW_BORROW_MODAL:
        const showModalState = {
            ...state,
            itemid: action.payload.itemid,
            itemowner: action.payload.itemowner,
            showBorrowModal: action.payload.showModal
        };
        return showModalState;

    case HIDE_BORROW_MODAL:
        const hideModalState = {
            ...state,
            showBorrowModal: action.payload
        };
        return hideModalState;

    default:
        return state;
    }
}

