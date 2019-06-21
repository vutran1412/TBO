import React from 'react'
import MainNavbarContainer from '../main_navbar/main_navbar_container'
import SplashContainer from '../splash/splash_container'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY === 0) {
            this.setState({
                hasScroll: false
            })
        } else if (this.state.hasScroll === false) {
            this.setState({
                hasScroll: true
            })
        }
    }

    render() {
        return (this.props.currentUser) ? (
            <div className="main-content-container" onScroll={this.handleScroll}>
                <MainNavbarContainer />
            </div>
        ) : <SplashContainer />
    }
}

export default Greeting