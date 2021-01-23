import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";

type ProfileType = {
    posts: ProfilePageType
    value: string
    dispatch: (action: ActionTypes) => void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}  value={props.value} dispatch={props.dispatch.bind(props.dispatch)}/>
        </div>
    )
}

export default Profile;