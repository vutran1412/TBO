import React from 'react'
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isDemoUser: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUserTyper = this.demoUserTyper.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentDidMount() {
        this.props.clearSessionErrors()
    }

    // componentWillUpdate() {
    //     this.setState({
    //         email: '',
    //         password: '',
    //         isDemoUser: false
    //     })
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.logIn(user).then(this.props.modalClose)
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
        )
    }

    handleDemoUser() {
        const user = Object.assign({}, this.state)
        this.props.logIn(user).then(this.props.modalClose)
    }

    demoUserTyper(stringInput, type) {
        let speed = 50
        let i = 0
        let intervalId = setInterval(() => {
            this.setState({
                [type]: this.state[type] += stringInput[i]
            }, () => {
                i++
                if (i === stringInput.length) {
                    clearInterval(intervalId)
                    if (type === "email") {
                        this.demoUserTyper("password", "password")
                    } else {
                        this.handleDemoUser()
                    }
                }
            })
        }, speed)
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({
            email: '',
            password: '',
            isDemoUser: true
        }, () => this.demoUserTyper("demouser@email.com", "email"))
    }

    componentDidUpdate() {
        if (this.isDemoUser) this.handleDemoUser() 
    }

    render() {
        return (
            <div className="login-form-container">
                <div onClick={this.props.modalClose} className="close-x">x</div>
                <h1 className="modal-header">Sign In</h1>
                <h2 className="modal-sub-header">Start your free trial {this.props.otherForm}</h2>
                <form id="login-form" className="login-form" onSubmit={this.handleSubmit}>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                    <label className="login-label">Email
                        <input id="email" className="login-input" type="email" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label className="login-label">Password
                        <input className="login-input" type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <input id="form-submit" className="login-button" type="submit" value={this.props.formType} />
                    <button className="login-button" value={true} onClick={this.handleClick}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)