import React, {useState,useContext} from "react";

const AppContext = React.createContext()
const AppProvider = ({children})=>{

    const[hovered, setHovered] = useState(false)

    const handleClose =()=>{
        setHovered(!hovered)
    }

    return (
        <AppContext.Provider
            value = {{
                hovered,
                setHovered,
                handleClose}}>{children}</AppContext.Provider>
    )}
    
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}