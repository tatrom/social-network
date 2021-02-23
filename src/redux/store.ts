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

export type ProfilePageType = {
    posts: Array<PostType>
    newText: string
    profile: ProfileType | null
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
    followingInProgress: Array<number>
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

export type UserDataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
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

type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: string
}

export type SetUserData = {
    type: "SET_USER_DATA"
    data: UserDataType
}

export type SetFollowingProgress = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching: boolean
    id: number
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
    | SetUserProfileType
    | SetUserData
    | SetFollowingProgress