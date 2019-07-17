import React from 'react'

class UserMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open ? this.props.open : false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open })
        }
    }

    render() {
        const styles = {
            
        }
    }
}