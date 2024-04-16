import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Cards from '../../components/Cards/Cards'
import './Faq.css'
import Section from '../../components/Section/Section'
import Footer from '../../components/Footer/footer'


function Faq() {
  return (
    
    <div className='faq-container'>
      <Navbar/>
      <Cards/>
      <Section/>
      <Footer/>
      
     
    </div>
  )
}

export default Faq