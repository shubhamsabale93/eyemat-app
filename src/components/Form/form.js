import React from 'react'
import './form.css'

function form() {
  return (
    <div className='form-container'>
        <div className='form-items'>
            <p className='contact-heading'>CONTACT US</p>
            <div className='content-form'>
            <p className='contact-items'>Name</p>
            <input type='text' placeholder='Name' className='input-box'/>
            <p className='contact-items'>Email</p>
            <input type='text' placeholder='Email' className='input-box'/> 
            <p className='contact-items'>contact No</p>
            <input type='text' placeholder='Mobile Number' className='input-box'/>
            <p className='contact-items'>Message</p>
            <input type='text' placeholder='Message' className='input-box1'/> 

            <button className='form-btn'>SEND</button>
            </div>
        </div>
        <div className='form-items'>
            <p className='contact-heading'>ALL PROJECT</p>
            <p className='paragraph-contact'>You can feel free to contact us for CCTV camera installation at any point of time and we would be ready to offer you with free on site review. Our team of highly trained security personnel would meet you at your desired location and review your current and future security needs. We would be glad to entertain any questions regarding the system manufacturers that we have chosen to utilize from your security consultants. Our technicians would also give you demonstrations on the systems that suit your requirements and explain in detail as to how easy it is to use them and how it will protect you.</p>

            <button className='form-btn2'>Click Here</button>

            <p className='contact-heading'>CONTACT US</p>

            <div className='contact-container'>
                <div className='contact-item'>
                    <p><b>Toll Free :</b>1800 210 3060</p>
                    <p><b>E-mail:</b>@eyematic.co.in,<br/>sales@eyematic.co.in</p>
                    <p><b>Standard shipping</b>
                        <br/><b>on all orders.</b></p>
                </div>
                <div className='contact-item'>
                    <ul>
                        <li>Monday to Friday</li>
                        <li>9:00am-8:00pm EST</li>
                    </ul>

                    <p><b>Address:</b> Eyematic Electronics Pvt. Ltd., Office No. 123, Poornima Tower, 1st floor, Shankar Sheth Road, Pune- 411037</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default form