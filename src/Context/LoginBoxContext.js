import { createContext, useState, useContext } from "react";

export const LoginBoxContext = createContext()

const loginBoxProps = {
    displayOn : {
        display:"initial"
    },
    displayOff : {
        display:"none"
    }
}

export const LoginBoxProvider = ({children}) =>{

    

    const [loginShow, setLoginShow] = useState("displayOff")

    const displayProp = loginShow == "displayOn"?LoginBoxContext.displayOn:LoginBoxContext.displayOff

    return(
        <LoginBoxContext.Provider values = {{loginShow, setLoginShow, loginBoxProps}}>
            {children}
        </LoginBoxContext.Provider>
    );


}

export function useLoginBox(){
    return useContext(LoginBoxContext);
}
