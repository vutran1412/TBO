import { Link } from 'react-router-dom'
import React from 'react'

class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false
        }
    }

    scrollToTop() {
        window.scrollTo(0,0)
    }

    
}