import React from "react";
// import s from '../Post.module.css';
import './MyPosts.module.css';
import {ActionTypes, PostType, ProfilePageType, RootStateType, StoreType} from "../../../redux/store";
import {addMessage, changeText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let MapStateToStore = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newText
    }
}
let MapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewPostText: (newValue: string) => {
            if (newValue !== undefined) {
                dispatch(changeText(newValue))
            }
        },
        addPost: (text: string) => {
            if (text) {
                dispatch(addMessage(text))
            }
        }
    }
}

export const MySuperPostContainer = connect(MapStateToStore, MapDispatchToProps)(MyPosts)
