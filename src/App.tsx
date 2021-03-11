import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {AppRootStateType} from "./redux/redux-store";
import {authReducerType} from "./redux/auth-reducer";
import {MessagesReducerType} from "./redux/messages-reducer";

type AppType = {
    state: AppRootStateType
    dispatch: (action: authReducerType | MessagesReducerType) => void
    subscribe: (callback: () => void) => void
}

const App = (props: AppType) => {
    const state = props.state
    return (
        <HashRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/login'}
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        </HashRouter>
    )
}
export default App;