import React from 'react'
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {requiredField} from "../../Utils/Validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string,
    password: string
    rememberMe: boolean
    captcha: string | null
}
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    isAuth: boolean
    captchaUrl: string | null
}

type LoginFormPropsType = {
    captcha: string | null
}
const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder="Email" name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div><Field placeholder="Password" name={'password'} component={Input}
                        validate={[requiredField]} type={'password'}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={"input"}/>
                remember me
            </div>
            {props.captcha && <img src={props.captcha} alt="captcha"/>}
            {props.captcha && <Field placeholder={'Symbols from image'} name={'captcha'} component={Input}/>}

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType ) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);