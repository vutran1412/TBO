import React from 'react'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
        }
    }

    

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }


    render() {
        const styles = {
            container: {
                position: 'absolute',
                top: 50,
                left: 70,
                width: '10vw',
                height: this.state.open ? '25vh' : 0,
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
            <div style={styles.container} >
                {
                    this.state.open ?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div> : null
                }
            </div>
        )
    }
}

export default Menu