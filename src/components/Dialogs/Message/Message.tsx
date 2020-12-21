import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink, Route} from "react-router-dom"
type TypeOfDialog = {
    name: string
    id: number

}

type TypeOfMessage = {
    message: string
}

const Message = (props: TypeOfMessage) => {
    return (
    <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;