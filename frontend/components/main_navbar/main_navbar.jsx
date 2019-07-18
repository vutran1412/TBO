import React from 'react'
import Menu from '../menu/menu'
import { Link, Redirect } from 'react-router-dom'
import MenuItem from '../menu/menu_item'
import MenuButton from '../menu/menu_button'
import UserMenu from '../menu/user_menu'
import UserMenuButton from '../menu/user_menu_button'
import UserMenuItem from '../menu/user_menu_item';


class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasScroll: false,
            menuOpen: false,
            userMenuOpen: false,
            loading: true
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.handleClick =  this.handleClick.bind(this)
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
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    handleUserMenuClick() {
        this.setState({ userMenuOpen: !this.state.userMenuOpen })
    }

    handleButtonClick() {
        this.setState({ userMenuOpen: false })
    }

    handleUserMenuLeave() {
        this.setState({ userMenuOpen: false })
    }

    handleLinkClick() {
        this.setState({ menuOpen: false })
    }

    handleMouseLeave() {
        this.setState({ menuOpen: false })
    }

    scrollToTop() {
        window.scrollTo(0,0)
    }

    handleSearchClick() {
        scrollToTop()
        return <Redirect to='/search' />
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
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
                justifySelf: 'flex-start',
            },
            logo: {
                gridColumn: '3 / 4',
                justifySelf: 'center'
            },
            user: {
                gridColumn: '6',
                justifySelf: 'center',
                paddingTop: '0px'
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
                    name={menu[index]}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.handleLinkClick(); }}>{val}</MenuItem>)
        });
        const userMenu = ['Logout']
        const userMenuItems = userMenu.map((val, index) => {
            return (
                <UserMenuItem
                    key={index}
                    name={menu[index]}
                    delay={`${index * 0.1}s`} logout={this.props.logout}>{val}</UserMenuItem>
            )
        })
        return (
            <>
        {this.state.loading ? <div></div> :
                <nav style={styles.container}>
                    <div style={styles.browse}>
                        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
                    </div>
                    <Menu open={this.state.menuOpen}>
                        {menuItems}
                    </Menu>
                    <div style={styles.search} id="search-button-container" >
                        <Link to="/search" className="search-button">
                            <i className="fas fa-search"></i>
                            <h3 className="search-title">
                                SEARCH
                            </h3>
                        </Link>
                    </div>
                    <div style={styles.logo}>
                        <Link to="/" replace>
                            <img className="nav-image nav-resize" src={window.logoImage} />
                        </Link>
                    </div>
                    <div style={styles.user} id="user-container">
                        <UserMenuButton currentUser={this.props.currentUser} userOpen={this.state.userMenuOpen} onClick={() => this.handleUserMenuClick()} color='white' />
                    </div>
                    <UserMenu userOpen={this.state.userMenuOpen}>
                        {userMenuItems}
                    </UserMenu>
                </nav>
            }
            </>
        )
    }
}

export default MainNavBar