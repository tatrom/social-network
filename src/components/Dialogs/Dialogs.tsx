import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {MessagesPageType} from '../../redux/messages-reducer';
import {Redirect} from 'react-router-dom';

type DialogsTypeProps = {
    state: MessagesPageType
    updateNewMessage: (text: string) => void
    addMessage: () => void
    isAuth: boolean
}


const Dialogs = (props: DialogsTypeProps) => {
    let dialogsElements = props.state.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name}
                                                                              id={dialog.id}/>);
    let messagesElements = props.state.messages.map((m, id) => <Message key={id} message={m.message}/>)

    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }

    const OnTextAreaKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.addMessage()
        }
    }

    const addMessageHandler = () => {
        props.addMessage();
    }

    if (props.isAuth === false) return <Redirect to={'/login'}/>
    return <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.state.newMessage} onChange={OnChangeHandler}
                          onKeyPress={OnTextAreaKeyPressHandler}/>
                <button onClick={addMessageHandler}>add</button>
            </div>
        </div>
    </div>
}

export default Dialogs;