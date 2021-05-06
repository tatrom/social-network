import React, {ComponentType} from 'react';
import './App.css';
import {compose} from "redux";
import {HashRouter, withRouter} from "react-router-dom";
import App from "./App";
import {InitializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import store, {AppRootStateType} from "./redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export const AppContainer = compose<ComponentType>(withRouter,
    connect(mapStateToProps, {InitializeApp}))(App)


export const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
