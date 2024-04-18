import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Dealer.css'
import Banner from '../../components/Banner/Banner';
import Registration from '../../components/Registration/Registration';



export default function Dealer() {
  
  return (
    <div>
      <Navbar/>
      <Banner title={"BECOME A DEALER"} subTitle={"HOME"} />
      <h2 className='dealer-title'>Dealer Registration</h2>
      <Registration/>
    </div>
  );
}
