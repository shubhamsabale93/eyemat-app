import React from 'react'
import './footer.css'
import Logo from './logo-GreenWhite.png'

function footer() {
  return (
    <div className='footer'>
      <div className='items'>
        <img src={Logo} className='logo-img'/>
      </div>
      <div className='items'>
        <p className='para-footer'>Links:</p>
        <ul className='links'>
          <li>Become a Dealer</li>
          <li>News</li>
          <li>About us</li>
          <li>FAQ's</li>
          <li>Privacy Policy</li>
          <li>Support</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='items'>
        <p className='para-footer'>Contact us:</p>
        <ul className='contact'>
          <li>🏠606/A, Chhatrapati Shivaji Maharaj Road, near Mamledar Kacheri, Shukrawar Peth, Pune, Maharashtra 411042</li>
          <li>📞91 9657043060, <span>+91 9673297329</span></li>
          <li>📞18002703060 (Toll Free)</li>
          <li>📧info@eyematic.co.in</li>
          <li>⏰Monday to Friday 9:00am - 8:00pm EST</li>
        </ul>
      </div>
      <div className='items'></div>

    </div>
  )
}

export default footer