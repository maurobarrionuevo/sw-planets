import React, { createContext, useState } from 'react'


export const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [name, setName] = useState('Mando')

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
