import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import React from "react";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

