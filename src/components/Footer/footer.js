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
      <div className='items'>
        <p className='para-footer'>Our Destination</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484276.8462880372!2d73.857914!3d18.510236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06c5dc8feb3%3A0x4b4c75d54e4bab7f!2s606%2C%20Chhatrapati%20Shivaji%20Maharaj%20Rd%2C%20Shukrawar%20Peth%2C%20Pune%2C%20Maharashtra%20411002%2C%20India!5e0!3m2!1sen!2sus!4v1713249569618!5m2!1sen!2sus" width="600" height="450" style={{border:"0" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
      </div>

    </div>
  )
}

export default footer