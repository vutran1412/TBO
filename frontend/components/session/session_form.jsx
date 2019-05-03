import React from 'react'
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const user = Object.assign({}, this.state)
        this.props.logIn(user).then(this.props.modalClose())
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
                <h1 className="modal-header">Sign In</h1>
                <h2 className="modal-sub-header">Start your free trial {this.props.otherForm}</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label className="login-label">Email Address
                        <input className="login-input" type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label className="login-label">Password
                        <input className="login-input" type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <input className="login-button" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)