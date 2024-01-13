const CartReducer = (state,action) =>{

      switch(action.type){

        case 'ADD_TO_CART':{
            if (action.type === 'ADD_TO_CART'){
                let {id, quantity, product} = action.payload;
                console.log(id)
        
                let existingCartItem = state.cart.find((curElem)=>curElem.id === id);
                console.log(existingCartItem)
                
                if(existingCartItem){
        
                    let  updatedCartItem = state.cart.map((cartItem) =>{
                        if(cartItem.id === id){
                            let newQuantity = cartItem.quantity + quantity;
                            console.log(newQuantity)
                            
                            if(newQuantity >= cartItem.max){
                                newQuantity = cartItem.max;
                            }
                            return{
                                ...cartItem,
                                quantity:newQuantity,
                            }
                        }else{
                            return cartItem
                        }  
                    })
                    return {
                        ...state,
                        cart: updatedCartItem
                    }
                }else{
        
                    let cartProduct = {
                        id:id,
                        quantity,
                        title : product.title,
                        image : product.thumbnail,
                        price: product.price,
                        max: product.stock
                    }      
            
                    return{
                        ...state,
                        cart: [...state.cart, cartProduct]
                    }
                    }
        
                }                
        }

        case "SET_INCREASE":{
            let updatedCartItem = state.cart.map((cartItem)=>{
                
                if(cartItem.id === action.payload){
                    let incQuantity = cartItem.quantity +1
                    if (incQuantity>=cartItem.max){
                        incQuantity = cartItem.max                        
                    }
                    return{
                        ...cartItem,
                       quantity: incQuantity
                    }                    
                    }else {
                       return cartItem
                    }                    
                })
                return{
                    ...state,
                    cart: updatedCartItem
                }
        }

        case "SET_DECREASE":{
            let updatedCartItem = state.cart.map((cartItem)=>{
                
                if(cartItem.id === action.payload){
                    let decQuantity = cartItem.quantity - 1
                    if (decQuantity<=1){
                        decQuantity = 1;                      
                    }
                    return{
                        ...cartItem,
                       quantity: decQuantity
                    }                    
                    }else {
                       return cartItem
                    }                    
                })
                return{
                    ...state,
                    cart: updatedCartItem
                }
        }

        case "REMOVE_ITEM":{
            let updatedCart = state.cart.filter((curItem)=>{
                return curItem.id !== action.payload
            })              
            
            return{
                ...state,
                cart:updatedCart
            }
        }

        case "CLEAR_CART":{
            return{
                ...state,
                cart:[]
            }
        }

        case "TOTAL_CART_ITEMS":{
            let totalItems = state.cart.reduce((acc,curElem)=>{
                let {quantity} = curElem;
                 acc = acc + quantity;
                return acc;
            },0)
            return {
                ...state,
                total_items : totalItems
            }
        }

        case "TOTAL_CART_PRICE":{
            let totalPrice = state.cart.reduce((acc,curElem)=>{
                let {price,quantity}= curElem;
                acc = acc + price * quantity;
                return acc;
            },0)
            return{
                ...state,
                total_price : totalPrice
            }
        }
        default:return state       
        }
        }

        

        // if (action.type === 'ADD_TO_CART'){
        // let {id, quantity, product} = action.payload;
        // console.log(id)

        // let existingCartItem = state.cart.find((curElem)=>curElem.id === id);
        // console.log(existingCartItem)
        
        // if(existingCartItem){

        //     let  updatedCartItem = state.cart.map((cartItem) =>{
        //         if(cartItem.id === id){
        //             let newQuantity = cartItem.quantity + quantity;
        //             console.log(newQuantity)
                    
        //             if(newQuantity >= cartItem.max){
        //                 newQuantity = cartItem.max;
        //             }
        //             return{
        //                 ...cartItem,
        //                 quantity:newQuantity,
        //             }
        //         }else{
        //             return cartItem
        //         }  
        //     })
        //     return {
        //         ...state,
        //         cart: updatedCartItem
        //     }
        // }else{

        //     let cartProduct = {
        //         id:id,
        //         quantity,
        //         title : product.title,
        //         image : product.thumbnail,
        //         price: product.price,
        //         max: product.stock
        //     }      
    
        //     return{
        //         ...state,
        //         cart: [...state.cart, cartProduct]
        //     }
        //     }

        // }
        
        // if (action.type === "SET_INCREASE"){
        //     let updatedCartItem = state.cart.map((cartItem)=>{
                
        //         if(cartItem.id === action.payload){
        //             let incQuantity = cartItem.quantity +1
        //             if (incQuantity>=cartItem.max){
        //                 incQuantity = cartItem.max                        
        //             }
        //             return{
        //                 ...cartItem,
        //                quantity: incQuantity
        //             }                    
        //             }else {
        //                return cartItem
        //             }                    
        //         })
        //         return{
        //             ...state,
        //             cart: updatedCartItem
        //         }
        // }
        // if (action.type === "SET_DECREASE"){
        //     let updatedCartItem = state.cart.map((cartItem)=>{
                
        //         if(cartItem.id === action.payload){
        //             let decQuantity = cartItem.quantity - 1
        //             if (decQuantity<=1){
        //                 decQuantity = 1;                      
        //             }
        //             return{
        //                 ...cartItem,
        //                quantity: decQuantity
        //             }                    
        //             }else {
        //                return cartItem
        //             }                    
        //         })
        //         return{
        //             ...state,
        //             cart: updatedCartItem
        //         }
        // }
       
       

    //     if (action.type ==="REMOVE_ITEM"){            
      
    //         let updatedCart = state.cart.filter((curItem)=>{
    //             return curItem.id !== action.payload
    //         })              
            
    //         return{
    //             ...state,
    //             cart:updatedCart
    //         }
       
    //     }  
        
    //     if(action.type === "CLEAR_CART"){
    //         return{
    //             ...state,
    //             cart:[]
    //         }
    //     }

    //     if(action.type === "TOTAL_CART_ITEMS"){
    //         let totalItems = state.cart.reduce((acc,curElem)=>{
    //             let {quantity} = curElem;
    //              acc = acc + quantity;
    //             return acc;
    //         },0)
    //         return {
    //             ...state,
    //             total_items : totalItems
    //         }
    //     }

    //     if (action.type === "TOTAL_CART_PRICE"){
    //         let totalPrice = state.cart.reduce((acc,curElem)=>{
    //             let {price,quantity}= curElem;
    //             acc = acc + price * quantity;
    //             return acc;
    //         },0)
    //         return{
    //             ...state,
    //             total_price : totalPrice
    //         }
    //     }
            
    
    //     return state
            
    // }



export default CartReducer