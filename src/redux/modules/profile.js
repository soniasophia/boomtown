// ACTION CONSTANT
export const LOAD_USERS = 'LOAD_USERS';


// ACTION CREATORS
export function loadUsers(myProfile) {
    return {
        type: LOAD_USERS,
        payload: myProfile
    };
}

// THIS IS A THUNK FUNC
export function fetchUserData(userId) {
    return function (dispatch) {
        fetch(`http://localhost:3001/users/${userId}`)
        .then(response => response.json())
        .then(myProfile => {
            dispatch(loadUsers(myProfile));
        });
    };
}

// return function (dispatch) {
//     Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
//           fetch(url).then(response => response.json())
//       ))).then(json => {
//           const [items, users] = json;
//           const myId = 'dQg4HT262FYOiuOUIRj1xrXjOva2';
//           const itemsWithOwners = items.map(item => {
//               const itemOwner = users.filter(user => user.id === item.itemOwner);
//               item.itemOwner = itemOwner[0];
//               return item;
//           });
//           const myProfileData = users.filter(user => user.id === myId);
//           const myItems = items.filter(item => item.itemOwner.id === myId);
//           const itemsBorrowed = items.filter(item => item.borrower === myId);
//           const myProfile = {
//               userData: myProfileData[0],
//               userItems: myItems,
//               itemsBorrowed
//           };

//               dispatch(loadUsers(myProfile));
//           });
//     };
// }


// REDUCERS
const initialState = {
    loading: true,
    myProfile: {}
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
    case LOAD_USERS:
        return {
            loading: false,
            myProfile: action.payload
        };

    default:
        return state;
    }
}

