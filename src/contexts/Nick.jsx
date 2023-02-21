import React, { createContext, useState } from 'react'

export const NickContext = createContext({})

export function NickProvider({children}) {
    const [user, setUser] = useState('')


    function access(nickname) {
        setUser(nickname)
    }

    return(
        <NickContext.Provider value={{user,access}}>
            {children}
        </NickContext.Provider>
    )
}