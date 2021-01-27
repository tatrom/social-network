import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";
import {ActionTypes, RootStateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
    subscribe: (callback: () => void) => void
}

const App = (props: AppType) => {
    const state = props.state
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/users'}
                           render={() => <Users state={state.usersPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;