import React from 'react'
import Logo from './logo'
import { Dots } from './dots'

class Loading extends React.Component {
    render() {
        const isLoading = this.props.isLoading
        if (isLoading) {
            setTimeout(() => {
                return <Dots />
            }, 1000)
            return <Logo />
        } else {
            return <div></div>
        }
    }
}

export default Loading