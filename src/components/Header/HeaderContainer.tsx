import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (userId: string, email: string, login: string, isAuth: boolean) => void
    getAuthUserData: () => void
    logout: () => void
}


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)