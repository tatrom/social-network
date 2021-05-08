import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {MessagesPageType} from '../../redux/messages-reducer';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

type DialogsTypeProps = {
    state: MessagesPageType
    addMessage: (message: string) => void
    isAuth: boolean
}

type FormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)
const Dialogs: React.FC<DialogsTypeProps> = ({isAuth, state, addMessage}) => {
    let dialogsElements = state.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name}
                                                                        id={dialog.id}/>);
    let messagesElements = state.messages.map((message, id) => <div key={id}>{message.message} </div>);

    if (!isAuth) return <Redirect to={'/login'}/>

    let addNewMessage = (values: FormDataType) => {
        addMessage(values.newMessageBody);
    }
    return <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}
                   validate={[requiredField, maxLength100]}/>
            <button>add</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)


export default Dialogs;