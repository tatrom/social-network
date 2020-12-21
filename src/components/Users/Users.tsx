import React from "react";
import s from './Users.module.css'
import {User} from "./User";

type UserType = {
    id: number
    name: string
    date: number
}
type UsersType = {
    state: {
        users: Array<UserType>
    }
}

export function Users(props: UsersType) {
    let users = props.state.users.map((u) => <User id={u.id} name={u.name} date={u.date}/>)

    return <div>
        {users}
    </div>
}