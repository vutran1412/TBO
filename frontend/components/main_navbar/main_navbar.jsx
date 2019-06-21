import React from 'react'
import Menu from '../menu/menu'
import { Link } from 'react-router-dom'
import MenuItem from '../menu/menu_item'
import MenuButton from '../menu/menu_button'


class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false,
            menuOpen: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleMenuClick() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    handleLinkClick() {
        this.setState({ menuOpen: false });
    }

    scrollToTop() {
        window.scrollTo(0,0)
    }

    handleSearchClick() {
        scrollToTop()
    }

    handleClick() {
        this.props.logout()
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
        const styles =
        {
            container: {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: '99',
                opacity: 0.9,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'black',
                width: '100%',
                color: 'white',
                fontFamily: 'Open Sans',
            },
            logo: {
                margin: '0 auto',
            },
            body: {
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                filter: this.state.menuOpen ? 'blur(2px)' : null,
                transition: 'filter 0.5s ease',
            },
        }
        const menu = ['Home', 'Series', 'Movies']
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.handleLinkClick(); }}>{val}</MenuItem>)
        });

       
        return (
        <div>
            <div style={styles.container}>
                <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' onMouseOver={(e) => e.target.style.color = "blue"} />
                <img className="nav-image resize" src={window.logoImage} />
                <img className="nav-image resize" src={window.userDefault} onClick={() => this.handleMenuClick()} />
            </div>
            <Menu open={this.state.menuOpen}>
                {menuItems}
            </Menu>
            
        </div>
        )
    }
}

export default MainNavBar