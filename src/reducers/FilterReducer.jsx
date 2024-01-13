const FilterReducer =(state, action)=>{

    switch (action.type) {
       
        case "LOAD_FILTER_PRODUCTS":{

            let priceArray = action.payload.map((curElm)=>curElm.price);
            let maxPrice = priceArray.reduce((acc, curElm)=>Math.max(acc,curElm),0)
            let minPrice = priceArray.reduce((acc, curElm)=>Math.min(acc,curElm),0)
            
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters,
                 maxPrice,
                 price: maxPrice,
                 minPrice
                }
            }
        }
        
        
        case "SET_GRID_VIEW":

        return {
            ...state,
            grid_view:true
        }

        case "SET_LIST_VIEW":

            return{
                ...state,
                grid_view:false
            }

        case "GET_SORT_VALUE":{
            
            return{
                ...state,
                sorting_value: action.payload
            }
        }

        case "SORT_PRODUCTS":{

        let newSortProducts;
        const {filter_products, sorting_value} = state;
        const tempProducts =[...filter_products];

        const sortingProducts = (a,b)=>{
            switch(sorting_value){

                case "lowest":
                    return a.price -b.price

                case "highest":
                    return b.price-a.price;

                case "a-z":
                    return a.title.localeCompare(b.title);

                case "z-a":
                    return b.title.localeCompare(a.title);
            }            
        }
                     newSortProducts = tempProducts.sort(sortingProducts);  
        
        return{
            ...state,
            filter_products: newSortProducts
        }

        }

        case "UPDATE_FILTER_VALUES":{
            const {name, value} = action.payload;
            console.log(name)
            console.log(value)
            return{
                ...state,
                filters :{
                    ...state.filters,
                    [name]: value,
                }
                
            }
            
        }

        case "FILTER_PRODUCTS":{
            let {all_products} =state;
            let tempFilterProducts = [...all_products];
            console.log(tempFilterProducts)
            let {text,category,brand,price} = state.filters; 
            console.log(price)           

            if(text){
            tempFilterProducts = tempFilterProducts.filter((product)=>{
                return product.title.toLowerCase().includes(text)
            })
            }

            if(category !="All"){
                tempFilterProducts=tempFilterProducts.filter((product)=>{
                    return product.category === category;
                })
            }

            if(brand !="All"){
                tempFilterProducts=tempFilterProducts.filter((product)=>{
                    return product.brand === brand;
                })
            }
           
           if(price===0){
            tempFilterProducts=tempFilterProducts.filter((product)=>{
                return product.price === price;
            })
           }
           else{
            tempFilterProducts = tempFilterProducts.filter((product)=>product.price<= price)
           }                    

            return {
                ...state,
                filter_products: tempFilterProducts
            }
        }

        case "SET_CATEGORY":
            return{
                ...state,
                categories:["All", ...action.payload]
            }

        case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    category: "All",
                    brand : "All",
                    price:state.filters.maxPrice,
                    maxPrice:state.filters.maxPrice,
                    minPrice:state.filters.maxPrice,
                }
            }
            
            
    
        default: return state;
           
    }

}

export default FilterReducer;