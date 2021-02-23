import {ActionTypes, UserDataType,} from "./store";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: UserDataType = initialState, action: ActionTypes) => {
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
export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean): ActionTypes => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export default authReducer;