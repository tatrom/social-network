import {ActionTypes, UsersPageType, UserType} from "./store";
import messagesReducer from "./messages-reducer";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        {
            id: 1,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: "Roman",
            status: "I am a programmer",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 2,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: "Sasha",
            status: "I am a policeman",
            location: {city: "Bahmut", country: "Ukraine"}
        },
        {
            id: 3,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: "Renat",
            status: "I am a student",
            location: {city: "Kiev", country: "Ukraine"}
        }
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u )}
        case UNFOLLOW:
            debugger
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u )}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
    }
    return state
}
export const followAC = (userId: number): ActionTypes => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): ActionTypes => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): ActionTypes => ({type: SET_USERS, users: users})

export default usersReducer;