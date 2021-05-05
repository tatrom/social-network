import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Preloader} from "./components/common/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));

type AppType = {
    InitializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/"} exact render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={'/news'}
                           render={withSuspense(News)}/>
                    <Route path={'/music'}
                           render={withSuspense(Music)}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/login'}
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

export default App;