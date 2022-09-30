import React from "react"
import userAPI from '../services/usersAPI'
import { FormErrors } from "../FormErrors"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            user: '',
            password: '',
            formErrors: { user: '', password: '' },
            userValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userValid = this.state.userValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'user':
                userValid = value.length <= 20;
                fieldValidationErrors.user = userValid ? '' : ' is invalid user';
                break;
            case 'password':
                passwordValid = value.length >= 5;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            userValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.userValid && this.state.passwordValid });
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleLogin() {
        let user = { userName: this.state.user, passWord: this.state.password }
        let isValid = this.state.formValid
        if (isValid) {
            let response = userAPI.login(user)
            if (response) {
                this.setState({ user: '', password: '', })
                localStorage.setItem('Username', this.state.user);
                localStorage.setItem('Password', this.state.password);
                this.props.handleCloseModal()
                alert('Login thanh cong')
            } else {
                alert('Login thất bại')
                this.setState({ user: '', password: '', })
            }
        }
    }

    render() {
        if (this.props.renderLogin) {
            return (
                <div className="modal">
                    <div className="loginPage">
                        <div className="form-login">
                            <div><h1>Login</h1></div>
                            <label>User</label>
                            <input type="text" name="user" placeholder="User Name *"
                                value={this.state.user}
                                onChange={this.handleUserInput} />


                            <label htmlFor="password">Password </label>
                            <input type="password" name="password" placeholder="Password *"
                                value={this.state.password}
                                onChange={this.handleUserInput} />
                        <div className="err-form">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>

                        </div>
                        <div className="login">
                            <ul>
                                <li>
                                    <a >
                                        <i ><button onClick={this.handleLogin}>Login</button></i>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <i><button onClick={this.props.handleCloseModal}>Close</button></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

        return null
    }
}

export default Login