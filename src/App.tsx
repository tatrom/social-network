import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import News from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import s from "./components/Dialogs/Dialogs.module.css";
import {Users} from "./components/Users/Users";
import {RootStateType, StoreType} from "./redux/state";


type AppType = {
    store: StoreType
}

const App = (props: AppType) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>

                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={state.messagesPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage} dispatch={props.store.dispatch.bind(props.store)} value={state.profilePage.newText} />}/>
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