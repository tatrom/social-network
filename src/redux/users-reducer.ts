import {usersApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../Utils/object-helpers";

// initial state
let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

// reducer
const usersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case "SET_USERS":
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USER_COUNT":
            return {...state, totalUserCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : [...state.followingInProgress.filter(id => id !== action.id)]
            }
    }
    return state
}

//types
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

// action creators
export const followSuccess = (userId: number): FollowUserType => ({type: "FOLLOW", userId})
export const unfollowSuccess = (userId: number): UnFollowUserType => ({type: "UNFOLLOW", userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: "SET_USERS", users: users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: "SET_CURRENT_PAGE", currentPage})
export const setUsersTotalCount = (totalCount: number): SetTotalUserCount => ({
    type: "SET_TOTAL_USER_COUNT",
    totalCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({type: "TOGGLE_IS_FETCHING", isFetching})
export const toggleFollowingProgress = (isFetching: boolean, id: number): SetFollowingProgress => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    id
})

// helpers
export const followUnfollowFlow = async (dispatch: Dispatch<UsersReducerType>, userId: number, apiMethod: Function, actionCreator: Function) => {
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


// thunks
export const getUsersAC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const response = await usersApi.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}

export const follow = (userId: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    await followUnfollowFlow(dispatch, userId, usersApi.followUser.bind(usersApi), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    await followUnfollowFlow(dispatch, userId, usersApi.unfollowUser.bind(usersApi), unfollowSuccess)
}

export default usersReducer;