import React from 'react'
import { withRouter } from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // debugger
        const user = Object.assign({}, this.state)
        this.props.signUp(user).then(this.props.modalClose)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <div onClick={this.props.modalClose} className="close-x">x</div>
                    <h1 className="modal-header">Sign Up</h1>
                    <h2 className="modal-sub-header" >Already subscribed? {this.props.otherForm}</h2>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <label className="login-label">First Name
                            <input className="login-input" type="text" value={this.state.firstName} onChange={this.update('first_name')} />
                        </label>
                        <label className="login-label">Last Name
                            <input className="login-input" type="text" value={this.state.lastName} onChange={this.update('last_name')} />
                        </label>
                        <label className="login-label">Email Address
                            <input className="login-input" type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <label className="login-label">Password
                            <input className="login-input" type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <input className="login-button" type="submit" value={this.props.formType}/>
                    </form>
            </div>
        )
    }
}

export default withRouter(SignUpForm)