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
        const user = Object.assign({}, this.state)
        this.props.signUp(user)
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
                    {this.renderErrors()}
                    <label>First Name
                        <input type="text" value={this.state.firstName} onChange={this.update('first_name')} />
                    </label>
                    <br/>
                    <label>Last Name
                        <input type="text" value={this.state.lastName} onChange={this.update('last_name')} />
                    </label>
                    <br/>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpForm)