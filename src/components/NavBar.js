import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={Styles.navBar}>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
