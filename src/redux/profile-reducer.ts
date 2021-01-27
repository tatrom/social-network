import {ActionTypes, PostType, ProfilePageType} from "./store";


const ADD_POST = "ADD-POST"
const CHANGE_TEXT = "CHANGE-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It s my first post!', likesCount: 11}
    ],
    newText: ''
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
                let stateCopy = {...state, posts: [...state.posts]}
                stateCopy.posts.push(newPost);
                stateCopy.newText = '';
                return {...stateCopy}
            }
            return state
        case "CHANGE-TEXT":
            state.newText = action.text;
            return {...state}
        default:
            return state
    }
}

export const addMessageCreator = (text: string): ActionTypes => ({type: ADD_POST, postMessage: text})
export const changeTextCreator = (text: string): ActionTypes => ({type: CHANGE_TEXT, text: text})

export default profileReducer;