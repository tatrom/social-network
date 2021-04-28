import React from "react";
import './MyPosts.module.css';
import {addPost, changeText, ProfileReducerTypes} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let MapStateToStore = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newText
    }
}
let MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text: string) => {
            if (text) {
                dispatch(addPost(text))
            }
        }
    }
}

export const MySuperPostContainer = connect(MapStateToStore, MapDispatchToProps)(MyPosts)
