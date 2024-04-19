import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Form from '../../components/Form/form'
import "./Contact.css"
import Footer from '../../components/Footer/footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Form/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15134.564150279552!2d73.866698!3d18.499912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eabdd0000095%3A0xc840deb593849001!2sEyematic%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1713424790611!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='contact-map'></iframe>

      <Footer/>
        
    </div>
  )
}

export default Contact