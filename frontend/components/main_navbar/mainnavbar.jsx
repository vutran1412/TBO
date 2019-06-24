import React from 'react'

class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: '99',
                opacity: 0.9,
                display: 'grid',
                gridTemplateColumn: '1fr 1fr 1fr 1fr 1fr',
                background: 'black',
                width: '100%',
                color: 'white',
                fontFamily: 'Open Sans',
            },
            browse: {
                gridColumn: '1', 
            },
            search: {
                gridColumn: '2'
            },
            logo: {
                gridcolumn: '3 / span 4'
            },
            user: {
                gridColumn: '5'
            }

        }

        return(
            <nav style={styles.container}>
                <div style={styles.browse}>browse</div>
                <div style={styles.search}>Search</div>
                <div style={styles.logo}>Logo</div>
                <div style={styles.user}>user</div>
            </nav>
        )
    }
}

export default MainNavBar