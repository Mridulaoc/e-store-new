import React from 'react'
import { IoGrid,IoListSharp } from "react-icons/io5";
import { useFilterContext } from '../contexts/FilterContext';

const Sort = () => {
  const {filter_products,setGridView,setListView,grid_view,sorting} = useFilterContext();
  return (
    <div>
      <div className='flex justify-between items-center px-10 py-2 md:py-5'>
        <div className='flex gap-2 items-center'>
          <button className={grid_view ? 'bg-black text-white p-1 md:p-3': 'p-1 md:p-3'} onClick={setGridView}>
           <IoGrid className='text-xs md:text-lg'/>
          </button >
          <button className={!grid_view ? 'bg-black text-white p-1 md:p-3': 'p-1 md:p-3'} onClick={setListView}>
            <IoListSharp className='text-sm md:text-2xl' />
          </button>
        </div>
        <p className='text-xs md:text-sm'>{`${filter_products.length}`}&nbsp;   Products Available</p>
        <div>
          <form action="#">
            <select name="sort" id="sort" className='p-1 border border-blue-200 tex-xs md:text-sm shadow' onClick={sorting}>
              <option value="sortby" >Sort by</option>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Sort
