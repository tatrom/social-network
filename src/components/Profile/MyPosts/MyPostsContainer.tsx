import React from "react";
// import s from '../Post.module.css';
import './MyPosts.module.css';
import {ActionTypes, PostType, ProfilePageType, RootStateType, StoreType} from "../../../redux/store";
import {addMessage, changeText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// function MyPostsContainer() {
//
//
//     return (
//         <StoreContext.Consumer>{
//             (store: StoreType) => {
//                 let state = store.getState();
//                 let addPost = (text: string) => {
//                     if (text) {
//                         store.dispatch(addMessageCreator(text))
//                     }
//                 }
//
//                 let onChangeText = (newValue: string) => {
//                     if (newValue !== undefined) {
//                         store.dispatch(changeTextCreator(newValue))
//                     }
//                 }
//                 return <MyPosts posts={state.profilePage.posts} value={state.profilePage.newText}
//                                 updateNewPostText={onChangeText}
//                                 addPost={addPost}/>
//             }
//         }</StoreContext.Consumer>
//     )
//
// }

let MapStateToStore = (state: RootStateType) => {
    debugger
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
