import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MySuperPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, updateStatus} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MySuperPostContainer/>
        </div>
    )
}

export default Profile;