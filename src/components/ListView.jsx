import FormattedPrice from '../Helpers/FormattedPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products,page}) => {
    
  return (
    <div className='grid gap-5  px-10 py-5'>
      {
        products.slice(page*12-12,page*12).map((product) =>{
            const {thumbnail, title, price , description,id} = product;
            return(
                <div className='grid grid-cols-2 p-5 border border-blue-200 rounded' key={product.id}>
                    <figure>
                        <img src={thumbnail} alt={title} className=' h-56 w-56 p-5' />
                    </figure>
                    <div className='p-5 flex flex-col justify-center gap-2'>
                        <h2 className='Capitalize text-lg md:text-xl'>{title}</h2>
                        <p><FormattedPrice price={price}/></p>
                        <p className='text-xs md:text-sm'>{description.slice(0,50)}...</p>
                        <NavLink to={`/singleproduct/${id}`}>
                        <button className='uppercase border border-blue-200 hover:border-blue-700 px-5 py-2 text-xs md:text-sm my-2'>read more</button>
                        </NavLink>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default ListView
