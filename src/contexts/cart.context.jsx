import { createContext, useState } from "react";

export const CartContext = createContext({
    show:false,
    setShow:() => {}
});

export const CartProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const value = {show, setShow};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

