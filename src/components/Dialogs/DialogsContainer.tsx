import React from 'react';

import {addNewMessageCreator, changeNewMessageCreator, MessagesReducerType} from '../../redux/messages-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        state: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: MessagesReducerType) => void) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageCreator())
        },
        updateNewMessage: (text: string) => {
            dispatch(changeNewMessageCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
