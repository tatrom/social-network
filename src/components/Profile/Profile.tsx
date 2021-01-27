import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     state: ProfilePageType
//     dispatch: (action: ActionTypes) => void
// }

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;