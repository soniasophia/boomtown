// ACTION CONSTANT
export const LOAD_ITEMS = 'LOAD_ITEMS';


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

// THIS IS A THUNK FUNCTION
export function fetchItems(userId) {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
              fetch(url).then(response => response.json())
          ))).then(json => {
              const [items, users] = json;
              const itemsWithOwners = items.map(item => {
                  const itemOwner = users.filter(user => user.id === item.itemOwner);
                  item.itemOwner = itemOwner[0];
                  return item;
              });
              const itemsBorrowers = items.map(item => {
                  const itemBorrower = users.filter(user => user.id === item.borrower);
                  item.itemBorrower = itemBorrower[0];
                  return item;
              });
              let specificUserItems = [];
              if (userId) {
                  specificUserItems = itemsWithOwners.filter(item => {
                      return item.itemOwner.id === userId;
                  });
              }
              dispatch(loadItems(itemsWithOwners, specificUserItems));
          });
    };
}


// REDUCER
const initialState = {
    loading: true,
    itemsData: [],
    specificUserItems: [],
    filterValue: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
    case LOAD_ITEMS:
        return {
            loading: false,
            itemsData: action.payload.itemsWithOwners,
            specificUserItems: action.payload.specificUserItems
        };

    default:
        return state;
    }
}

