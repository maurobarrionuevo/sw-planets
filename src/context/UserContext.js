import React, { createContext, useState } from 'react'


const defaultContext = {
    name: 'Juan'
}

export const UserContext = createContext(defaultContext)

const UserContextProvider = ({ children }) => {

    const [name, setName] = useState('Pablo')

    const value = {
        name,
        setName
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
