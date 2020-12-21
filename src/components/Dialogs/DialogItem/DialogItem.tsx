import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink, Route} from "react-router-dom"

type TypeOfDialog = {
    name: string
    id: number

}


const DialogItem: React.FC<TypeOfDialog> = (props) => {
    let path = "/dialogs/1" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
export default DialogItem;

