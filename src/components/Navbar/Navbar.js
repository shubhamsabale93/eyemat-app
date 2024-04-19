import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

function navbar(props) {
  return (
    <div className='Navbar'>
      
        <Link to='/' className='nav-items'>Home</Link>&nbsp;
        
        
        <Link to='/about' className='nav-items'>About</Link>

        
        <Link to='/faq' className='nav-items'>FAQ </Link>
        <Link to='/support1' className='nav-items'>Support1</Link>
        <Link to='/event' className='nav-items'>Events</Link>
        <Link to='/news' className='nav-items'>News</Link>
        <Link to='/awards' className='nav-items'>Awards</Link>
        <Link to='/contact' className='nav-items'>Contacts</Link>
        <Link to='/dealer' className='nav-items'>Dealer</Link>

    </div>
    
   
  )
}

export default navbar