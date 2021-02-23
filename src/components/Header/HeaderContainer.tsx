import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type HeaderPropsType = {
    isAuth?: boolean
    login: string | null
    setAuthUserData: (userId: string, email: string, login: string) => void
}


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)