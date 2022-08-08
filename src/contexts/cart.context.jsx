import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  export const removeItem = (cartItems, item) => {
    return cartItems.filter(m => m.id !== item.id);
  }

  export const decreaseItem = (cartItems, productTodecrease) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productTodecrease.id
    );

    if (existingCartItem.quantity === 1) {
      return removeItem(cartItems, existingCartItem)
    }
    else {
      return cartItems.map((cartItem) =>
        cartItem.id === productTodecrease.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 } 
          : cartItem
      );
    }
  }

export const CartContext = createContext({
    show:false,
    setShow:() => {},
    cartItems:[],
    addItemToCart:() => {},
    cartCount:0,
    removeChecoutItem:() => {},
    decreaseChecoutItem:() => {},
    cartTotal:0,
});

export const CartProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
      const newcartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0);
      setCartTotal(newcartTotal);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeChecoutItem = (productToRemove) => {
      setCartItems(removeItem(cartItems, productToRemove));
    }

    const decreaseChecoutItem = (productToRemove) => {
      setCartItems(decreaseItem(cartItems, productToRemove));
    }

    const value = {show, setShow, addItemToCart, cartItems, cartCount, removeChecoutItem, decreaseChecoutItem, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

