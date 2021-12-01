import React from 'react'
import Styles from './Layout.module.css'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => {
    return (
        <div className={Styles.mainLayout}>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout
