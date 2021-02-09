import {ActionTypes, UsersPageType, UserType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users:  []
    //     [
    //     {
    //         id: 1,
    //         followed: true,
    //         name: "Roman",
    //         status: "I am a programmer",
    //         uniqueUrlName: null,
    //         photos: {
    //             small: null,
    //             large: null
    //         },
    //
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         name: "Sasha",
    //         status: "I am a policeman",
    //         uniqueUrlName: null,
    //         photos: {
    //             small: null,
    //             large: null
    //         }
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         name: "Renat",
    //         status: "I am a student",
    //         uniqueUrlName: null,
    //         photos: {
    //             small: null,
    //             large: null
    //         }
    //     }
    // ]
}

const usersReducer = (state: UsersPageType =  initialState, action: ActionTypes) => {
    debugger;
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