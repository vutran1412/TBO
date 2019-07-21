import React from 'react'

class UserMenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        
    }

    handleHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    handleClick() {
        this.props.logout
    }
    
    render() {
        const styles = {
            userItemcontainer: {
                opacity: 0,
                animation: '1s appear forwards',
                animationDelay: this.props.delay,
                alignItems: 'center',
            },
            userMenuItem: {
                fontFamily: `'Open Sans', sans-serif`,
                fontSize: '1.2rem',
                padding: '1rem 0',
                margin: '0 5%',
                cursor: 'pointer',
                color: this.state.hover ? 'gray' : '#fafafa',
                transition: 'color 0.2s ease-in-out',
                animation: '0.5s slideIn forwards',
                animationDelay: this.props.delay,
            },
            userButton: {
                backgroundColor: 'black',
                border: 'none'
            }
        }
        return (
            <div style={styles.userItemcontainer}>
                <button onClick={this.handleClick} style={styles.userButton}>
                    <div
                        style={styles.userMenuItem}
                        onMouseEnter={() => { this.handleHover() }}
                        onMouseLeave={() => { this.handleHover() }}
                        onClick={this.props.logout}>{this.props.children}</div>
                </button>
            </div>
        )
    }
}

export default UserMenuItem