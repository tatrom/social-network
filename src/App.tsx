import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <h1>Hello Roman</h1>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
}

export default App;