import { TiStarOutline, TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Rating = ({rating}) => {
    const ratingStars = Array.from({length:5}, (elem,index)=>{
        const number = index + 0.5;
        return(
            <span key={index} >
                {
                    rating >= index + 1
                    ?(<TiStarFullOutline className='text-yellow-400 text-xs md:text-lg'/>)
                    : rating >= number
                    ? (<TiStarHalfOutline className='text-yellow-400 text-xs md:text-lg'/>)
                    :(<TiStarOutline className='text-yellow-400 text-xs md:text-lg' />)
                }

            </span>
        )
        
    })
  return (
    <div className='flex'>
      {ratingStars}
    </div>
  )
}

export default Rating
