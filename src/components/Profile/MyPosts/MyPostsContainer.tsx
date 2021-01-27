import React from "react";
// import s from '../Post.module.css';
import './MyPosts.module.css';
import {ActionTypes, PostType, ProfilePageType} from "../../../redux/store";
import {addMessageCreator, changeTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


function MyPostsContainer() {



    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addPost = (text: string) => {
                    if (text) {
                        store.dispatch(addMessageCreator(text))
                    }
                }

                let onChangeText = (newValue: string) => {
                    if (newValue !== undefined) {
                        store.dispatch(changeTextCreator(newValue))
                    }
                }
               return <MyPosts posts={state.profilePage.posts} value={state.profilePage.newText}
                         updateNewPostText={onChangeText}
                         addPost={addPost}/>
            }
        }</StoreContext.Consumer>
   )

}

export default MyPostsContainer;