import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";
import { SliderData } from './SliderData';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;
    let autoScroll = true;
    let slideInterval;
    let intervelTime = 5000;

    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide -1)
    }

    const nextSlide =()=>{
        setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide +1)
    }

    const auto =()=>{
       slideInterval = setInterval(() => {
        nextSlide();          
        }, 5000);
        }

    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return ()=>clearInterval(slideInterval)
    },[currentSlide])
    
    
    useEffect(()=>{
        setCurrentSlide(0)
    },[]);
 
  return (
    <div className='w-full relative'>
        <BsArrowLeftCircle className='absolute top-2/4 left-5 text-white text-lg' onClick={prevSlide} />
        <BsArrowRightCircle className='absolute top-2/4 right-5 text-white text-lg'  onClick={nextSlide}/>
        {SliderData.map((slide,index)=>{
            return(
                <div key={index} className={index===currentSlide ? "w-full" : "hidden"}>
                    <img src={slide.image} alt="slide1" className=' h-96 object-cover md:h-150 w-full'  />
                    <div className='absolute top-1/3 left-20 bg-black bg-opacity-50 w-2/3 p-5 md:w-1/3 md:p-10'>
                        <h2 className=' text-lg md:text-2xl text-white mb-5'>{slide.heading}</h2>
                        <NavLink to="/products"><button className='bg-blue-700 px-3 py-1 rounded text-white uppercase '>shop now</button></NavLink>
                    </div>
                </div>
            )
        })}


      
    </div>
  )
}

export default Slider
