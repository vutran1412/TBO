import React from 'react'

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
            color: this.props.color ? this.props.color : 'black',
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    componentDidUpdate() {
        let browseBar = document.getElementById('browse-bar')
        if (this.state.open) {
            browseBar.classList.remove('fa-bars')
            browseBar.classList.add('fa-times')
        } else {
            browseBar.classList.remove('fa-times')
            browseBar.classList.add('fa-bars')
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open });  
    }

    render() {
        
        return (
            <div id="burger-container">
                <i className="fas fa-bars" id="browse-bar" onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick()}}></i>
                <h3 className="browse-button"
                    onClick={this.props.onClick ? this.props.onClick :
                        () => { this.handleClick()}} id="browse-title">BROWSE</h3>
            </div>
        )
    }
}

export default MenuButton