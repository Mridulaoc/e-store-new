const ProductReducer = (state, action) =>{

    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true
            }            
            
        case 'SET_PRODUCTS':
            {
            const topRatedProducts = action.payload.filter((curElem)=>{
              
                return curElem.rating >= 4.9;
            })
            console.log(topRatedProducts)
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                topRatedProducts:topRatedProducts
            }
        }
        case 'SET_ERROR':
            return{
                ...state,
                isError:true

            }
        case 'SET_SINGLE_LOADING':
            return{
                ...state,
                isSingleLoading:true
            }
        case 'SET_SINGLE_PRODUCT':
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }
        case 'SET_SINGLE_ERROR':
            return{
                ...state,
                isSingleLoading:false,
                isSingleError:true
            }
    
        default: return state;
            
    }

}
export default ProductReducer;