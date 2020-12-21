import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type ProfileType = {
    posts: ProfilePageType
    addPost: (message: string) => void


}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;