import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducers/FilterReducer"
import axios from "axios";

const FilterContext = createContext();

const API = 'https://dummyjson.com/products/categories';


const initialState = {
    filter_products: [],
    all_products: [],
    isLoading: false,
    grid_view:true,
    sorting_value: "lowest",
    filters:{
        text:"",
        category: "All",
        brand : "All",
        price:0,
        maxPrice:0,
        minPrice:0,
    },
    categories: [],
        
}

const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const [state, dispatch ] =useReducer(reducer, initialState)

    const setGridView = () =>{
        dispatch({type:"SET_GRID_VIEW"})
    }

    const setListView = () =>{
        dispatch({type:"SET_LIST_VIEW"})
    }

    const sorting = (e) =>{
        const sortValue = e.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:sortValue})
    }

    const updateFilterProducts = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        dispatch({type:"UPDATE_FILTER_VALUES",payload:{name,value}})
    }

    const getCategoryData = async (url) =>{
        try {
            const res = await axios.get(url);
            const categoryData = await res.data;
            console.log(categoryData)
            dispatch ({type:"SET_CATEGORY",payload:categoryData})

            
        } catch (error) {
            console.log(error)
        }
    }

    const clearFilters = () =>{

        dispatch({type:"CLEAR_FILTERS"})
    }

  

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({type:"SORT_PRODUCTS"});
    },[products, state.sorting_value,state.filters])

    useEffect(()=>{
        getCategoryData(API);
    },[])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])



    return (
    <FilterContext.Provider value={{...state,setGridView,setListView, sorting,updateFilterProducts,clearFilters}}>
        {children}
    </FilterContext.Provider>
    )

}

const useFilterContext = ()=>{
    return useContext(FilterContext);
}

export { useFilterContext, FilterContextProvider }
