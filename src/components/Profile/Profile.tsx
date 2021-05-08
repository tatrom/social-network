import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MySuperPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<void>
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />

            <MySuperPostContainer/>
        </div>
    )
}

export default Profile;