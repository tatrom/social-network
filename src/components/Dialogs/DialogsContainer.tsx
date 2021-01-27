import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {ActionTypes, MessagesPageType} from '../../redux/store';
import {addNewMessageCreator, changeNewMessageCreator} from '../../redux/messages-reducer';
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return <StoreContext.Consumer>{ (store) => {
            let state = store.getState()
            const OnChangeHandler = (text: string) => {
                store.dispatch(changeNewMessageCreator(text))
            }
            const addMessage = () => {
                store.dispatch(addNewMessageCreator())
            }

            return <Dialogs state={state.messagesPage} addMessage={addMessage} updateNewMessage={OnChangeHandler}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;