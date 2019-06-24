import React from 'react'
import MainNavbarContainer from '../main_navbar/main_navbar_container'
import SplashContainer from '../splash/splash_container'
import Loading from '../loading/loading'


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false,
            isLoading: true
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1000)
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
            <>
                <Loading isLoading={this.state.isLoading} />
                <div className="main-content-container" onScroll={this.handleScroll}>
                    <MainNavbarContainer />
                </div>
            </>
        ) : <SplashContainer />
    }
}

export default Greeting