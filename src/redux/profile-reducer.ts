import {profileApi} from "../api/api";
import {Dispatch} from "redux";

//initial state
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

//reducer
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
        case 'DELETE_POST': {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        default:
            return {...state}
    }
}

// types
export type ProfileReducerTypes =
    SetUserProfileType
    | ChangeTextActionType
    | AddPostActionType
    | SetStatusActionType
    | DeletePostType

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


export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type ChangeTextActionType = ReturnType<typeof changeText>
export type AddPostActionType = ReturnType<typeof addPost>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type DeletePostType = ReturnType<typeof deletePost>

//action creators

export const addPost = (text: string) => ({type: "ADD-POST", postMessage: text} as const)
export const changeText = (text: string) => ({type: "CHANGE-TEXT", text: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE_POST', postId} as const)


//thunks
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;