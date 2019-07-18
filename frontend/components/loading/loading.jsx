import React from 'react'
import Logo from './logo'

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.loadingTimeId = setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.loadingTimeId)
    }

    render() {
        const isLoading = this.state.loading
        if (isLoading) {
            return <Logo />
        } else {
            return <div></div>
        }
    }
}

export default Loading