
import { FilterSection, Sort, ProductList } from '../components/index'


const Products = () => {  
  return (
    <div className='w-full'>
    <div className='flex flex-col w-full gap-5 md:grid md:grid-flow-col md:gap-10 md:w-3/4 mx-auto'>
      <div className=" md:col-span-2">
        <FilterSection/>
      </div>
      <div className="md:col-span-3">
        <Sort/>
        <ProductList/>
      </div>
    </div>
    </div>
  )
}

export default Products
