import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {ActionTypes, addNewMessageCreator, changeNewMessageCreator, MessagesPageType} from '../../redux/state';

type DialogsTypeProps = {
    state: MessagesPageType
    dispatch: (action: ActionTypes) => void
}


const Dialogs = (props: DialogsTypeProps) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageCreator(e.currentTarget.value))
    }
    // const OnButtonKeyPressHandler = () => {
    //         props.dispatch(addNewMessageCreator())
    // }
    const OnTextAreaKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if ( e.key === "Enter" ) {
            props.dispatch(addNewMessageCreator())
        }
    }
    return <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.state.newMessage} onChange={OnChangeHandler} onKeyPress={OnTextAreaKeyPressHandler}/>
                <button onClick={() => props.dispatch(addNewMessageCreator())}>add</button>
            </div>
        </div>
    </div>
}

export default Dialogs;