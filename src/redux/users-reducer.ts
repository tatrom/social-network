import {usersApi} from "../api/api";
import {Dispatch} from "redux";

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : [...state.followingInProgress.filter(id => id !== action.id)]
            }
    }
    return state
}

type FollowUserType = {
    type: "FOLLOW"
    userId: number
}
type UnFollowUserType = {
    type: "UNFOLLOW"
    userId: number
}
type SetUsersType = {
    type: "SET_USERS"
    users: Array<UserType>
}
type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type SetTotalUserCount = {
    type: "SET_TOTAL_USER_COUNT"
    totalCount: number
}
export type SetFollowingProgress = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching: boolean
    id: number
}
type ToggleIsFetching = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

export type UsersReducerType =
    FollowUserType
    | UnFollowUserType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUserCount
    | ToggleIsFetching
    | SetFollowingProgress


export const followSuccess = (userId: number): FollowUserType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnFollowUserType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount: number): SetTotalUserCount => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, id: number): SetFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: (action: UsersReducerType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))

        usersApi.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: (action: UsersReducerType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))

        usersApi.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}


export default usersReducer;