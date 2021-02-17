import React from "react";
import {RootStateType} from "../../redux/store";
import {ProfileType} from '../../redux/store'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addMessage, changeText, setUserProfile} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    addMessage: (message: string) => void
    changeText: (text: string) => void
    setUserProfile: (profile: string) => void
}


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        // posts: state.profilePage.posts,
        // newText: state.profilePage.newText,
        // profile: state.profilePage.profile
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    ProfileContainer,
    addMessage,
    changeText,
    setUserProfile
})(ProfileContainer)

