import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducers/ProductReducer'

const AppContext = createContext();

const API = 'https://dummyjson.com/products?limit=0';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    topRatedProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct:{}
}


const AppContextProvider = ({children}) =>{

    const[state,dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) =>{
        dispatch({type:'SET_LOADING'}); 
        try {
            const res = await axios.get (url);
            console.log(res)
            const products = await res.data.products;
            console.log(products)
            dispatch({type:'SET_PRODUCTS', payload:products})
        } catch (error) {
            dispatch({type:'SET_ERROR'})
            
        }
    }

    const getSingleProduct = async(url) =>{
        dispatch({type:'SET_SINGLE_LOADING'}); 
        try {
            const res = await axios.get (url);
            const singleproduct = await res.data;
            dispatch({type:'SET_SINGLE_PRODUCT', payload:singleproduct})
           
        } catch (error) {
            dispatch({type:'SET_SINGLE_ERROR'})            
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[])

    return(
        <AppContext.Provider value={{...state,getSingleProduct}} >
            {children}
        </AppContext.Provider>
    )
}

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppContextProvider, useProductContext};