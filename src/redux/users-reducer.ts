import {ActionTypes, UsersPageType} from "./store";

let initialState = {
    users: [
        {id: 1, name: "Evgen", date: 1999},
        {id: 2, name: "Evgen", date: 2008},
        {id: 3, name: "Evgen", date: 1012},
        {id: 4, name: "Evgen", date: 2010}
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {

    return state
}
export default usersReducer;