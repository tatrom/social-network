import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfilePropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>

    )
}

export default ProfileInfo;