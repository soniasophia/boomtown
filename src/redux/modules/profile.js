// ACTION CONSTANT
export const


// ACTION CREATORS



// THIS IS A THUNK FUNCTION
export function fetchUserData() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
              fetch(url).then(response => response.json())
          ))).then(json => {
              const [items, users] = json;
              const myId = 'dQg4HT262FYOiuOUIRj1xrXjOva2'
              const itemsWithOwners = items.map(item => {
                  const itemOwner = users.filter(user => user.id === item.itemOwner);
                  item.itemOwner = itemOwner[0];
                  return item;
              });
              const myProfileData = users.filter(user => user.id === myId);
              const myItems = items.filter(items => item.itemOwner === myId);
              const itemsBorrowed = items.filter(item => item.borrower === myId);
              const myProfile = {
                userData: myProfileData,
                userItems: myItems,
                itemsBorrowed: itemsBorrowed
              }

              dispatch(loadItems(itemsWithOwners));
          });
    };
}


// REDUCERS

