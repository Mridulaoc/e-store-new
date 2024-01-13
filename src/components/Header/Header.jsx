
import {NavLink} from 'react-router-dom'
import {Container,Navbar} from '../index'

const Header = () => {
  return (
    <Container>
        <div className='w-full md:w-full md:flex md:justify-between md:items-center'>
        <NavLink >
        <img src='../images/e-store logo.png' alt="logo" className='w-28 md:w-28 md:absolute md:-top-5 md:block'/>
        </NavLink>
        <div>
        <Navbar/>
        </div>
        </div>   
    </Container>
    
  )
}

export default Header
