import React from 'react'

class UserMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userOpen: this.props.userOpen ? this.props.userOpen : false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userOpen !== this.state.userOpen) {
            this.setState({ userOpen: nextProps.userOpen })
        }
    }

    render() {
        const styles = {
            userContainer: {
                position: 'absolute',
                top: 50,
                right: 120,
                width: '5vw',
                height: this.state.userOpen ? '3wh' : 0,
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fafafa',
                transition: 'width 0.4s ease',
                zIndex: 6,
            },
            menuList: {
                paddingTop: '0rem',
            }
        }
        return (
            <div style={styles.userContainer}>
                {
                    this.state.userOpen ? 
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div> : null
                }

            </div>
        )
    }
}

export default UserMenu