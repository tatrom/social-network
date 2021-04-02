export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}


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
}
const messagesReducer = (state: MessagesPageType = initialState, action: MessagesReducerType): MessagesPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let message = action.message
            return {...state, messages: [...state.messages, {id: 6, message: message}]}
        }
        default:
            return state
    }


}

export type MessagesReducerType = AddNewMessageType


type AddNewMessageType = {
    type: "ADD_NEW_MESSAGE"
    message: string
}


export const addNewMessageCreator = (message: string): AddNewMessageType => ({type: ADD_NEW_MESSAGE, message})
export default messagesReducer;