// ACTION CONSTANT
export const LOAD_ITEMS = 'LOAD_ITEMS';

// ACTION CREATORS
export function loadItems(itemsWithOwners) {
    return {
        type: LOAD_ITEMS,
        payload: itemsWithOwners
    };
}

// THIS IS A THUNK FUNCTION
export function fetchItems() {
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
              dispatch(loadItems(itemsWithOwners));
          });
    };
}
