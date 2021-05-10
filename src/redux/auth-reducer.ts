import {authApi, profileApi, securityApi} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
}

//reducer
export const authReducer = (state: UserDataType = initialState, action: AuthReducerActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }
}

//types
export type AuthReducerActionType =
    | SetAuthUserDataType
    | getCaptchaUrlSuccessDataType
export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export type getCaptchaUrlSuccessDataType = ReturnType<typeof getCaptchaUrlSuccess>
export type UserDataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

//action creators
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    url: captchaUrl
} as const)


// thunks
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getAuthUserData = () => async (dispatch: Dispatch<AuthReducerActionType>) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkAction<void, AuthReducerActionType, unknown, any> => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        await dispatch(getAuthUserData())

    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {email: message}))
    }
}

export const logout = (): ThunkAction<void, AuthReducerActionType, unknown, AuthReducerActionType> => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export const getCaptchaUrl = (): ThunkAction<void, AuthReducerActionType, unknown, AuthReducerActionType> => async (dispatch) => {
    const response = await securityApi.getCaptcha()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;