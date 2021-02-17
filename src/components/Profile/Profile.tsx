import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MySuperPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MySuperPostContainer />
        </div>
    )
}

export default Profile;