import { createContext, Fragment, useState, useEffect } from "react";
import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect(()=> {
                onAuthStateChangedListner(async (user)=>{
                if(user) {
                    await createUserDocumentFromAuth(user);
                }
                setCurrentUser(user);
            });
    },[]);

    return <UserContext.Provider value={value}><Fragment>{children}</Fragment></UserContext.Provider>
}

