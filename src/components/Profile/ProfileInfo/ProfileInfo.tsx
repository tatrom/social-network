import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader";
import {ProfileType} from "../../../redux/store";

type ProfilePropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfilePropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
                     alt="" width={900}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;