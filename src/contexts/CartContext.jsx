import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer"

const CartContext = createContext();

const getLocalCartData =() =>{
    let localCartData = localStorage.getItem("EstoreCart");
    if(!localCartData){
        return [];
    }else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart:getLocalCartData(),
    // cart:[],
    total_items:"",
    total_price:"",
    shipping_fee:5
}

const CartContextProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    const addToCart = (id,quantity,product) =>{

        dispatch({type:"ADD_TO_CART",payload:{id,quantity,product}})

    }

    const setIncrease = (id) =>{
        dispatch({type:"SET_INCREASE",payload:id})
    }

    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREASE",payload:id})
    }


    const removeItem = (id) =>{      
        dispatch ({type:"REMOVE_ITEM", payload:id});
    }

    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"})
    }
    
    useEffect(()=>{
        dispatch({type:"TOTAL_CART_ITEMS"})
        dispatch({type:"TOTAL_CART_PRICE"})
        localStorage.setItem("EstoreCart", JSON.stringify(state.cart));
    },[state.cart])
    


    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () =>{
    return useContext(CartContext)
}

export {CartContextProvider, useCartContext};