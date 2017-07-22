// // ACTION CONSTANT
// export const LOAD_USERS = 'LOAD_USERS';


// // ACTION CREATORS
// export function loadUsers(myProfile) {
//     return {
//         type: LOAD_USERS,
//         payload: myProfile
//     };
// }

// // THIS IS A THUNK FUNC
// export function fetchUserData(userId) {
//     return function (dispatch) {
//         fetch(`http://localhost:3001/users/${userId}`)
//         .then(response => response.json())
//         .then(myProfile => {
//             dispatch(loadUsers(myProfile));
//         });
//     };
// }


// // REDUCERS
// const initialState = {
//     loading: true,
//     myProfile: {}
// };

// export function profileReducer(state = initialState, action) {
//     switch (action.type) {
//     case LOAD_USERS:
//         return {
//             loading: false,
//             myProfile: action.payload
//         };

//     default:
//         return state;
//     }
// }

