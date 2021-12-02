import React from 'react'
import Styles from './Layout.module.css'
import NavBar from '../components/NavBar'
import UserBlock from '../components/UserBlock'

const Layout = ({ children }) => {
    return (
        <div className={Styles.mainLayout}>
            <NavBar />
            <UserBlock />
            {children}
        </div>
    )
}

export default Layout
