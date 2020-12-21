import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, RootStateType} from './redux/state'

debugger;
export let rerenderEntireTree = (state: RootStateType) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
reportWebVitals();
