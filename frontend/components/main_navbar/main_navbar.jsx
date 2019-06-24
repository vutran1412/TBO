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
            menuOpen: false,
            loading: true
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        let loadingTimeoutId = setTimeout(() => {
            this.setState({
                loading: false
            })
            if (this.isLoading) {
                clearTimeout(loadingTimeoutId)
            }
        }, 1000)
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
                display: 'grid',
                gridTemplateColumn: '100px 100px 1fr 1fr 100px',
                background: 'black',
                width: '100%',
                color: 'white',
                fontFamily: 'Open Sans',
            },
            browse: {
                gridColumn: '1',
                justifySelf: 'center'
            },
            search: {
                gridColumn: '2',
                justifySelf: 'center',
            },
            logo: {
                gridColumn: '3 / 4',
                justifySelf: 'center'
            },
            user: {
                gridColumn: '6',
                justifySelf: 'center'
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
            <>
        {this.state.loading ? <div></div> : <div>
                <div style={styles.container}>
                    <div style={styles.browse}>
                        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
                    </div>
                    <Menu open={this.state.menuOpen}>
                        {menuItems}
                    </Menu>
                    <div style={styles.search} id="search-container">
                        <i className="fas fa-search"></i>
                        <h3 className="search-button">
                            SEARCH
                        </h3>
                    </div>
                    <div style={styles.logo}>
                        <img className="nav-image resize" src={window.logoImage} />
                    </div>
                    <div style={styles.user} id="user-container">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>}
            </>
        )
    }
}

export default MainNavBar