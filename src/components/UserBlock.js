import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Styles from './UserBlock.module.css'

const UserBlock = () => {

    const { name } = useContext(UserContext)

    console.log(name)
    
    return (
        <div className={Styles.userBlock}>
            Iniciaste sesión como: {name}
        </div>
    )
}

export default UserBlock
