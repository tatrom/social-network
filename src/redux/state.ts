import {rerenderEntireTree} from "../render";

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
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type UsersPageType = {
    users: Array<UserType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
}
debugger
let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post!', likesCount: 11}
        ]
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
            {id: 5, message: 'Yo'}]
    },
    usersPage: {
        users: [
            {id: 1, name: "Evgen", date: 1999},
            {id: 2, name: "Evgen", date: 2008},
            {id: 3, name: "Evgen", date: 1012},
            {id: 4, name: "Evgen", date: 2010}
        ]
    }
}
debugger
export let addPost = (postMessage: string) => {
    const newPost:PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state;