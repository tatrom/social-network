import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import ProfileDataForm from "./ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<void>
}

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile: ProfileType) => {
        saveProfile(profile).then(() => {
            setEditMode(false)
        })
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={setEditMode}/>}
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>

    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: (editMode: boolean) => void
}


const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={() => goToEditMode(true)}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b> : {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>

}

export default ProfileInfo;