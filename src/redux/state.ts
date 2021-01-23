export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void

}

type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}
type ChangeTextActionType = {
    type: "CHANGE-TEXT"
    text: string
}

type ChangeNewMessageType = {
    type: "CHANGE-NEW-MESSAGE"
    message: string
}

type AddNewMessageType = {
    type: "ADD_NEW_MESSAGE"
}


const ADD_POST = "ADD-POST"
const CHANGE_TEXT = "CHANGE-TEXT"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"

export type ActionTypes = AddPostActionType | ChangeTextActionType | ChangeNewMessageType | AddNewMessageType

export const addMessageCreator = (text: string): ActionTypes => ({type: ADD_POST, postMessage: text})
export const changeTextCreator = (text: string): ActionTypes => ({type: CHANGE_TEXT, text: text})
export const changeNewMessageCreator = (text: string): ActionTypes => ({type: CHANGE_NEW_MESSAGE, message: text})
export const addNewMessageCreator = (): ActionTypes => ({type: ADD_NEW_MESSAGE})

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It s my first post!', likesCount: 11}
            ],
            newText: ''
        },
        messagesPage: {
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
        },
        usersPage: {
            users: [
                {id: 1, name: "Evgen", date: 1999},
                {id: 2, name: "Evgen", date: 2008},
                {id: 3, name: "Evgen", date: 1012},
                {id: 4, name: "Evgen", date: 2010}
            ]
        }
    },
    _rerenderEntireTree() {
    },
    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            if (action.postMessage) {
                let newPost: PostType = {
                    id: 5,
                    message: action.postMessage,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newText = '';
                this._rerenderEntireTree()
            }
        } else if (action.type === CHANGE_TEXT) {
            this._state.profilePage.newText = action.text;
            this._rerenderEntireTree()
        } else if (action.type === CHANGE_NEW_MESSAGE) {
            this._state.messagesPage.newMessage = action.message;
            this._rerenderEntireTree()
        } else if (action.type === ADD_NEW_MESSAGE) {
            let message = this._state.messagesPage.newMessage.trim()
            if ( message) {
            this._state.messagesPage.messages.push({id: 5, message: this._state.messagesPage.newMessage})
            this._state.messagesPage.newMessage = ''
            }
            this._rerenderEntireTree()
        }
    }
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type UserType = {
    id: number
    name: string
    date: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}

type UsersPageType = {
    users: Array<UserType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
}