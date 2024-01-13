import React from 'react'
import {Container} from './index'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <Container>
     <NavLink to="/" className='text-base md:text-xl'>Home</NavLink>/ <span className='capitalize text-base md:text-xl'>{title}</span>   

    </Container>
  )
}

export default PageNavigation
