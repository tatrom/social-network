import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import { MessagesPageType } from '../../redux/state';

type DialogsTypeProps = {
    state: MessagesPageType
}


const Dialogs = (props: DialogsTypeProps) => {

    // let dialogs = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Andrew'},
    //     {id: 3, name: 'Sveta'},
    //     {id: 4, name: 'Sasha'},
    //     {id: 5, name: 'Viktor'},
    //     {id: 6, name: 'Valera'},
    //     ];
    //
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How is your it kamasutra?'},
    //     {id: 3, message: 'Yo'},
    //     {id: 4, message: 'Yo'},
    //     {id: 5, message: 'Yo'}
    // ];

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    </div>
}

export default Dialogs;