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
import {RootStateType} from "./redux/state";

// type DialogsType = {
//     id: number
//     name: string
// }
// type MessageType = {
//     id: number
//     message: string
// }
//
// type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// type UsersType = {
//     id: number
//     name: string
//     date: number
// }
// type AppType = {
//     state: {
//         profilePage: {
//             posts: Array<PostsType>
//         }
//         messagesPage: {
//             dialogs: Array<DialogsType>
//             messages: Array<MessageType>
//
//         }
//         usersPage: {
//             users: Array<UsersType>
//         }
//     }
// }



type AppType2 = {
    state: RootStateType
    addPost: (message: string) => void
}

const App = (props: AppType2) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>

                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/users'}
                           render={() => <Users state={props.state.usersPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;