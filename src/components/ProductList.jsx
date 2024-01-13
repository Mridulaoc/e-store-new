import { useState } from "react";
import { useFilterContext } from "../contexts/FilterContext"
import {GridView, ListView} from "../components/index";
import {Pagination} from "../components/index";


const ProductList = () => {
  const {filter_products, grid_view} = useFilterContext();

  const [page,setPage]=useState(1);
  const pageSelectedHandler =(selectedPage)=>{
    if(selectedPage >= 1 && selectedPage < (filter_products.length/10) && selectedPage != page){
      setPage(selectedPage)
    }
  }

  if (grid_view === true){
    return(
      <>
      <GridView products={filter_products} page={page} />
      <Pagination products={filter_products} pageSelectedHandler={pageSelectedHandler} page={page}/>      
      </>
    )
  }

  if (grid_view === false){
    return(
      <>
      <ListView products={filter_products} page={page} />
      <Pagination products={filter_products} pageSelectedHandler={pageSelectedHandler} page={page}/> 
      </>
    )
  }


 
}

export default ProductList
