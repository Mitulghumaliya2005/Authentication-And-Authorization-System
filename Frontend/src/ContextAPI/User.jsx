import { useState } from "react"
import { createContext, } from "react"

export const UserContext = createContext(null);

export const UserContextProvider = (props)=>{
    
    const [User, setUser] = useState(null);

    return (
        <UserContext.Provider value={{User,setUser,name:"kelvin"}}>
            { 
                props.children
            }
        </UserContext.Provider>
    )
}