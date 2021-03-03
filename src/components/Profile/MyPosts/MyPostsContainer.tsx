import React from "react";
import './MyPosts.module.css';
import {addMessage, changeText, ProfileReducerTypes} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


let MapStateToStore = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newText
    }
}
let MapDispatchToProps = (dispatch: (action: ProfileReducerTypes ) => void) => {
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
