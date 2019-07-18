import React from 'react'

class UserMenuButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userOpen: this.props.userOpen ? this.props.userOpen : false,
            color: this.props.color ? this.props.color: 'black',
            hover: false
        }
        this.handleHover = this.handleHover.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userOpen !== this.state.userOpen) {
            this.setState({ userOpen: nextProps.userOpen })
        }
    }

    handleClick() {
        this.setState({ userOpen: !this.state.userOpen })
    }

    handleHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    componentDidUpdate() {
        let userIcon = document.getElementById('user-icon')
        if (this.state.userOpen) {
            userIcon.classList.remove('fa-user')
            userIcon.classList.add('fa-times')
        } else {
            userIcon.classList.remove('fa-times')
            userIcon.classList.add('fa-user')
        }
    }

    render() {
        const userButtonStyles = {
            userButtonContainer: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'baseline'
            },
            userIcon: {
                color: this.state.hover ? 'azure' : 'white'
            },
            userButton: {
                color: this.state.hover ? 'azure' : 'white',
                cursor: this.state.hover ? 'pointer' : 'auto'
            }
        }
        return (
            <div style={userButtonStyles.userButtonContainer}>
                <i id="user-icon"
                    className="fas fa-user" onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick() }}></i>
                <h3 style={userButtonStyles.userButton}
                        onMouseEnter={this.handleHover}
                    className="user-button" onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick() }}>
                    {this.props.currentUser.first_name}
                </h3>
            </div>
        )
    }
}

export default UserMenuButton