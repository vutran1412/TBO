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
                right: 80,
                height: this.state.userOpen ? '25vh' : 0,
                width: '20vw',
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                background: 'black',
                opacity: 3,
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