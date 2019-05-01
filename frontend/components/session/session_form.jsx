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
        this.props.logIn(user)
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
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)