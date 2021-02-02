import {ActionTypes, MessagesPageType, PostType} from "./store";
import usersReducer from "./users-reducer";

const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [{id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}],
    newMessage: ''
}
const messagesReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE:
            debugger
            return {...state, newMessage: action.message }

        case ADD_NEW_MESSAGE: {
            let message = state.newMessage.trim()
            debugger
             return {...state, messages: [...state.messages, {id: 6, message: message}], newMessage: ""}
        }
        default:
            return state
    }


}
export const changeNewMessageCreator = (text: string): ActionTypes => ({type: CHANGE_NEW_MESSAGE, message: text})
export const addNewMessageCreator = (): ActionTypes => ({type: ADD_NEW_MESSAGE})
export default messagesReducer;