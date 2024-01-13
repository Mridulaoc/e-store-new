import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import { FaShippingFast } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Images, FormattedPrice, PageNavigation, Rating,AddToCart } from '../components/index';
// import FormattedPrice from '../Helpers/FormattedPrice';

const API = 'https://dummyjson.com/products';

const SingleProduct = () => {
  const {id} = useParams();
  const {singleProduct,isSingleLoading,getSingleProduct} = useProductContext();
  const {id:ID,brand,description,price,rating, stock,title,discountPercentage,images,thumbnail} = singleProduct;
  
  

  useEffect(()=>{
    getSingleProduct(`${API}/${id}`);
  },[])

  if (isSingleLoading){
    return <div>Loading.....</div>
  }

  return (
   <>
   <PageNavigation title={title}/>
   <div  className='grid  w-full gap-10  md:w-3/4 md:mx-auto my-10 md:grid-cols-2'>
    <div className='flex'>
      <Images imgs={images} thumbnail={thumbnail}/>
    </div>
    <div className='flex flex-col gap-2'>
      <h2 className='font-bold text-xl md:text-2xl capitalize'>{title}</h2>
      <p><Rating rating={rating}/></p>
      <p className='text-sm md:text-base'>MRP: <del>{<FormattedPrice price={price}/>}</del></p>
      <p className='font-bold text-blue-500 text-sm md:text-base'>Deal Of The Day : <FormattedPrice price={price-((price*discountPercentage)/100)}/></p>
      <p className='text-sm md:text-base'>{description}</p>
      <div className='flex justify-between my-2 border-b-2'>
        <div className='flex flex-col items-center gap-1'>
        <FaShippingFast />
        <p>Free Shipping</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
        <TbExchange />
        <p>Return & Exchange</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
        <MdSecurity />
        <p> 1-Year Warranty</p>
        </div>
      </div>
      <p>Availability : <span className='font-bold text-green-600'>{stock > 0 ? "In Stock" : "Out Of Stock"}</span></p>
      <p>Brand : <span className='font-bold capitalize'>{brand}</span></p>
      <hr />
      {stock > 0 && <AddToCart product={singleProduct} />}
    </div>
   </div>
   </>
  )
}

export default SingleProduct
