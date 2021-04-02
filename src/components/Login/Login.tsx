import React from 'react'
import {reduxForm, InjectedFormProps, Field, stopSubmit} from "redux-form";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect, useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string,
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder="Email" name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div><Field placeholder="Password" name={'password'} component={Input}
                        validate={[requiredField]} type={'password'}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={"input"}/>
                remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {login})(Login);