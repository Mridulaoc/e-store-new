
import { useFilterContext } from '../contexts/FilterContext'
import {FormattedPrice} from '../components/index'
import { FaFilterCircleXmark } from "react-icons/fa6";


const FilterSection = () => {
  
  const {filters:{text,category,maxPrice, minPrice, price},updateFilterProducts,categories,all_products,clearFilters}=useFilterContext();
  console.log(categories)

  const getUniqueData = (data, property) =>{
    let newData = data. map((curElm)=>{
      return curElm[property]
    })
    return (newData = ["All",...new Set(newData)]);
  }
  
  
  const brandData = getUniqueData(all_products, "brand");
  

  return (
    <div className='flex flex-wrap items-center justify-center md:items-start md:flex-col w-full '>
      <div className='p-5 md:px-0 md:py-10 '>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFilterProducts} placeholder='SEARCH' className='text-xs border border-blue-200 md:text-sm shadow  p-1' />
        </form>
      </div>
      <div className='py-5 flex gap-1 md:flex-col'>
        <h3 className='text-sm md:text-base font-bold mb-4'>Category</h3>
        <div className='hidden md:block'>
        {categories.map((curElm,index)=>{
          return(
            <button 
            type='button'
            name='category'
            value={curElm} 
            key={index} 
            className= {curElm === category ? 'border border-transparent border-b-black text-sm capitalize flex flex-col items-start mb-2':'text-sm capitalize flex flex-col items-start mb-2 '}
            onClick={updateFilterProducts}>
              {curElm}
            </button>
          )
        })}
        </div>
        <div>
        <form action="#">
        <select 
        name="category" 
        id="category" 
        className='border border-blue-200 text-xs capitalize p-1 md:text-sm shadow md:hidden'
        onClick={updateFilterProducts} >
          {
            categories.map((curElm,index) =>{
              return(
              <option value={curElm} key={index} >{curElm}</option>
              )
            })
          }
        </select>
      </form>
        </div>
      </div>

      <div className='p-5 md:p-0 flex md:flex-col gap-2'>
      <h3 className='text-sm md:text-base font-bold mb-4'>Brand</h3>
      <form action="#">
        <select 
        name="brand" 
        id="brand" 
        className='p-1 border border-blue-200 text-xs capitalize md:text-sm shadow'
        onClick={updateFilterProducts} >
          {
            brandData.map((curElm,index) =>{
              return(
              <option value={curElm} key={index} >{curElm}</option>
              )
            })
          }
        </select>
      </form>
      </div>
      <div className='w-3/4 gap-3 md:flex flex-col hidden '>
      <h3 className='md:pb-2 md:pt-5 md:px-0 font-bold'>Price</h3>
      <FormattedPrice price={price}/>
      <input 
      type="range"
      max={maxPrice} 
      min={minPrice} 
      value={price}
      name='price' onInput={updateFilterProducts}
      />
      </div>
      <div className='p-5 md:py-5 md:px-0'>
        <button 
        className='bg-blue-700 uppercase text-white text-xs p-2  md:text-sm md:px-5 md:py-2 md:block' 
        onClick={clearFilters}>
        clear filters
        </button >
       
      </div>
    </div>
  )
}

export default FilterSection
