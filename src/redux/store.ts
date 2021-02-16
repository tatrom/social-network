import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

export type StoreType = {
    // _state: RootStateType
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
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

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
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

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
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

type FollowUserType = {
    type: "FOLLOW"
    userId: number
}
type UnFollowUserType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersType = {
    type: "SET_USERS"
    users: Array<UserType>
}

type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type SetTotalUserCount = {
    type: "SET_TOTAL_USER_COUNT"
    totalCount: number
}

type ToggleIsFetchinig = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}


export type ActionTypes =
    AddPostActionType
    | ChangeTextActionType
    | ChangeNewMessageType
    | AddNewMessageType
    | UnFollowUserType
    | FollowUserType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUserCount
    | ToggleIsFetchinig

// export const store: StoreType = {
//     state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'It s my first post!', likesCount: 11}
//             ],
//             newText: ''
//         },
//         messagesPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrew'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [{id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it kamasutra?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}],
//             newMessage: ''
//         },
//         usersPage: {
//             users: [
//                 {id: 1, name: "Evgen", date: 1999},
//                 {id: 2, name: "Evgen", date: 2008},
//                 {id: 3, name: "Evgen", date: 1012},
//                 {id: 4, name: "Evgen", date: 2010}
//             ]
//         }
//     },
//     _rerenderEntireTree() {
//     },
//     subscribe(callback: () => void) {
//         this._rerenderEntireTree = callback
//     },
//     getState() {
//         return this.state
//     },
//     dispatch(action) {
//         this.state.profilePage = profileReducer(this.state.profilePage, action);
//         this.state.messagesPage = messagesReducer(this.state.messagesPage, action);
//         this.state.usersPage = usersReducer(this.state.usersPage, action);
//         this._rerenderEntireTree()
//     }
// }

