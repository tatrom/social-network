import {authApi} from "../api/api";
import {ProfileReducerTypes, setStatus, setUserProfile} from "./profile-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

type ActionType = SetAuthUserDataType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export type UserDataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    authApi.setProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}


export const getAuthUserData = () => (dispatch: Dispatch<ActionType>) => {
   return authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, ActionType, unknown, any> => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {email: message}))
            }
        })
}

export const logout = (): ThunkAction<void, ActionType, unknown, ActionType> => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export default authReducer;