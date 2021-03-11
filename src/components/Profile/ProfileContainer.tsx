import {getStatus, ProfileType, updateStatus} from '../../redux/profile-reducer'
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
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '14575'
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile status={this.props.status} updateStatus={this.props.updateStatus} profile={this.props.profile}/>
        )
    }

}


let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
        ,
        status: state.profilePage.status
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default compose<ComponentType>(connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus
}), withRouter)(ProfileContainer)


