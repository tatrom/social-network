import {profileApi} from "../api/api";
import {Dispatch} from "redux";

export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        [key: string]: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type UserDataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}


const ADD_POST = "ADD-POST"
const CHANGE_TEXT = "CHANGE-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: "Its a first post", likesCount: 3},
        {id: 2, message: "Its a second post", likesCount: 3},
        {id: 3, message: "Its a third post", likesCount: 3},
        {id: 4, message: "Its a fourth post", likesCount: 3},
        {id: 5, message: "Its a fifth post", likesCount: 3},
    ],
    newText: "",
    profile: null,
    status: ""

}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let textOfPost = action.postMessage.trim()
            if (textOfPost) {
                let newPost: PostType = {
                    id: 5,
                    message: action.postMessage,
                    likesCount: 0
                }
                return {...state, posts: [...state.posts, newPost], newText: ''}
            }
            return state
        case "CHANGE-TEXT":
            state.newText = action.text;
            return {...state}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export type ProfileReducerTypes =
    SetUserProfileType
    | SetUserData
    | ChangeTextActionType
    | AddPostActionType
    | SetStatusActionType

export type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
export type SetUserData = {
    type: "SET_USER_DATA"
    data: UserDataType
}
export type ChangeTextActionType = {
    type: "CHANGE-TEXT"
    text: string
}
export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}
export type SetStatusActionType = {
    type: 'SET-STATUS'
    status: string
}

export const addMessage = (text: string): AddPostActionType => ({type: ADD_POST, postMessage: text})
export const changeText = (text: string): ChangeTextActionType => ({type: CHANGE_TEXT, text: text})
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: 'SET-STATUS', status})

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
                dispatch(setStatus(response.data))
            }
        )
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }
        )
}

export default profileReducer;