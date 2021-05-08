import React, {ComponentType} from 'react';
import {addNewMessageCreator,  MessagesReducerType} from '../../redux/messages-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        state: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: MessagesReducerType) => void) => {
    return {
        addMessage: (message: string) => {
            dispatch(addNewMessageCreator(message))
        }
    }
}


export default compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)
