import {getStatus, ProfileType, savePhoto, saveProfile, setStatus, updateStatus} from '../../redux/profile-reducer'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    setStatus: (status: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<void>
}

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    componentWillUnmount() {
        this.props.setStatus('')
    }

    render() {
        return (
            <Profile status={this.props.status} updateStatus={this.props.updateStatus} profile={this.props.profile}
                     isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }

}


let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}


export default compose<ComponentType>(connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus,
    setStatus,
    savePhoto,
    saveProfile
}), withRouter)(ProfileContainer)


