"use client"
import React,{createContext,useContext,useState} from "react"

const cartContext = createContext()

export const CartProvider =({children})=>{
    const[cartCount, setCartCount] = useState(0); 
    const addToCart =()=>{
        setCartCount(prev=>prev+1)
    }
    
    return(
        <cartContext.Provider value={{cartCount, addToCart}}>
        {children}
    </cartContext.Provider>
)
}

export const useCart = ()=>useContext(cartContext)