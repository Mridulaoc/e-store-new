import { NavLink } from 'react-router-dom';
import FormattedPrice from '../Helpers/FormattedPrice';

const Product = (curElem) => {
    const {id, category, title, thumbnail, price} = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className='bg-white border  border-gray-200 h-48 md:h-60 rounded-lg shadow text-xs md:text-sm '>
        <figure className='relative flex justify-center'>
            <img src={thumbnail} alt={title} className=' h-40 object-cover w-full p-4'/>
            <figcaption className='absolute top-6 right-2 uppercase p-1 bg-white text-xs text-gray-400 border border-gray-300 rounded-xl'>{category}</figcaption>
        </figure>
        <div className='flex justify-between px-5'>
            <h3 className='capitalize text-xs'>{title}</h3>
            <p>{<FormattedPrice price={price} />}</p>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
