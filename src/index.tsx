// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import React from "react";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App dispatch={store.dispatch} state={store.getState()} subscribe={store.subscribe}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)