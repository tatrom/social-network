import {ActionTypes, PostType, ProfilePageType} from "./store";


const ADD_POST = "ADD-POST"
const CHANGE_TEXT = "CHANGE-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It s my first post!', likesCount: 11}
    ],
    newText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
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
        default:
            return state
    }
}

export const addMessage = (text: string): ActionTypes => ({type: ADD_POST, postMessage: text})
export const changeText = (text: string): ActionTypes => ({type: CHANGE_TEXT, text: text})
export const setUserProfile = (profile: string): ActionTypes => ({type: SET_USER_PROFILE, profile})

export default profileReducer;