import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";


let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionType =
    | InitializedSuccessType

type InitializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({type: 'SET_INITIALIZED'} as const)

export const InitializeApp = (): ThunkAction<void, AppRootStateType, unknown, ActionType> => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}
