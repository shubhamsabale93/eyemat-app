import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Awards.css'
import ImgCertificate from "./cer1.jpg"
import Footer from '../../components/Footer/footer'
import Cards from '../../components/Cards/Cards'
function Awards() {
  return (
    <div>
      <Navbar/>
        
        <p className='para'>Certificates</p>
        <img src={ImgCertificate} className='image'/>

        

        <Footer/>
        
          

        </div>
        

    
  
  )
}

export default Awards