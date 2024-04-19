import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NewEvent from './NewEvent'
import eventImg from './eventimg1.png'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/footer'


function Event() {
  let para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur cum? Veritatis in quo fuga, esse, laboriosam sequi culpa rem ipsum corporis doloremque inventore facere illum nam repudiandaeLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur cum? Veritatis in quo fuga, esse, laboriosam sequi culpa rem ipsum corporis doloremque inventore facere illum nam repudiandaeLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur cum? Veritatis in quo fuga, esse, laboriosam sequi culpa rem ipsum corporis doloremque inventore facere illum nam repudiandaeLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur cum? Veritatis in quo fuga, esse, laboriosam sequi culpa rem ipsum corporis doloremque inventore facere illum nam repudiandaeLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consequuntur cum? Veritatis in quo fuga, esse, laboriosam sequi culpa rem ipsum corporis doloremque inventore facere illum nam repudiandae";
  return (
    
    <div>
      <Navbar/>
      <Banner title={"EVENTS"} subTitle={"HOME"} />
      <NewEvent imgSrc={eventImg} para={para}/>
      <Footer/>
    </div>
  )
}

export default Event