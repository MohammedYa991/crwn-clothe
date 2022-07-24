import { createContext, Fragment, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}><Fragment>{children}</Fragment></UserContext.Provider>
}