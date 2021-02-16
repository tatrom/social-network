import {ActionTypes, UsersPageType, UserType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case UNFOLLOW:
            debugger
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            debugger
            return {...state, isFetching: action.isFetching }
    }
    return state
}
export const follow = (userId: number): ActionTypes => ({type: FOLLOW, userId})
export const unfollow = (userId: number): ActionTypes => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): ActionTypes => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage: number): ActionTypes => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount: number): ActionTypes => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean): ActionTypes => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;