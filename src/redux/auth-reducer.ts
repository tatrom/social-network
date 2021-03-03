import {authApi, usersApi} from "../api/api";
import {ProfileReducerTypes, setUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: UserDataType = initialState, action: authReducerType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type authReducerType = SetUserData

export type SetUserData = {
    type: "SET_USER_DATA"
    data: UserDataType
}
export type UserDataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean): SetUserData => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export const getUserProfile = (userId: string) => {
    return (dispatch: (action: ProfileReducerTypes) => void) => {
        authApi.setProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}


export const loginMe = () => {
    return (dispatch: (action: ProfileReducerTypes) => void) => {
        authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}


export default authReducer;