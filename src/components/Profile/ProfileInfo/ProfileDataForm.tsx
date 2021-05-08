import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'


type ProfileDataFormPropsType = {
    profile: ProfileType
}


export const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({
                                                                                                                                   profile,
                                                                                                                                   error,
                                                                                                                                   ...props
                                                                                                                               }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: <Field placeholder={'Full name'} name={'fullName'} component={Input}/>
            </div>
            <div>
                <b>Looking for a job:</b><Field placeholder={'looking for a job'} name={'lookingForAJob'}
                                                type={'checkbox'} component={Input}/>
            </div>
            <div><b>Looking for a job description</b>: <Field placeholder={'Looking for a job description'}
                                                              name={'lookingForAJobDescription'} component={Input}/>
            </div>
            <div>
                <b>About me:</b> <Field placeholder={'About me'} name={'aboutMe'} component={Input}/>
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact} key={key}>
                    <b>{key}: <Field placeholder={key} name={`contacts.${key}`} component={Input}/></b>
                </div>
            })}
            </div>
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm