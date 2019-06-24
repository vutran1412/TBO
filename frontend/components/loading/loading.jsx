import React from 'react'
import Logo from './logo'
import { Dots } from './dots'

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        let loadingTimeId = setTimeout(() => {
            this.setState({
                loading: false
            })
            if (!this.loading) {
                clearTimeout(loadingTimeId)
            }
        }, 1000)
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