import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Info1 from './Info1'
import about1 from './about1.png'
import './About.css'
import Details from './Details'
import Profile from './Profile'
import Footer from '../../components/Footer/footer'
//import { useState } from 'react'

 

function About() {
  // let [counter, setCounter] = useState(0);
  // let incCount = ()=>{
  //   if(counter === 10){
  //     clearInterval(interval);
  //   }else{
  //     setCounter(counter+1);
  //   }
  // }
  // const interval = setInterval(incCount, 500);
  return (
    <div>
      <Navbar/>
        <div className='main'>
          <div className='newInfo1'>
              <div className='newInfo'>
                <img className='about1' src={about1} alt='about1'/>
                <div className='info'>
                    <Info1>
                      <h4>Products & Services</h4>
                      <hr className='underline'/>
                      <p className='info-para'>Eyematic bring you the innovative and sustainable technologies in security and surveillance solutions while achieving your business objectives. Eyematic</p>
                      <p className='info-para'> interior & security solution delivers a wide range of electronic security and surveillance technology products and services including</p>
                      <ul>
                          <li className='info-para'>IP and analogue Video Surveillance Systems</li>
                          <li className='info-para'>Video Archiving and Remote Video Monitoring Systems</li>
                          <li className='info-para'> Biometrics and Proximity based Identity and Access Management (IAM)</li>
                          <li className='info-para'>Visitor Control and Management Systems</li>
                          <li className='info-para'>Vehicle Access Barrier Systems</li>
                          <li className='info-para'> Archway Metal Detector</li>
                          <li className='info-para'>Vehicle tracking systems</li>
                      <u><li className='info-para'>Luggage and Parcel Inspection Systems</li></u>
                      <u><li className='info-para'>RFID Inventory and Asset Management</li></u>
                      <u><li className='info-para'>Intruder Alarm Systems (IAS)</li></u>
                      </ul>
                    </Info1>
                  </div>
              </div> 
              <div className='newInfo'>
                <div className='info'>
                <Info1>
                  <span className='span-title'>SEEMINGLY ELEGENT DESIGN</span>
                  <h4 className='info-head'>About our online store</h4>
                  <hr className='underline'/>
                  <p className='info-para'>
                  Eyematic CCTV is a Indian owned company that specialises in the design, supply, installation and maintenance of video surveillance systems. These systems are designed to suit customer’s individual requirements. As we specialise in video surveillance systems, our focused in-depth understanding of the latest technologies, enables us to designs systems and source products that can best meet the specific needs of our customers and the industry.

                  Eyematic CCTV has been at the forefront of the Video Surveillance and Closed Circuit Television (CCTV) Industry in Pune (India)  since 1995. Eyematic's experience, knowledge and innovation, ensures that we will satisfy the highest customer expectations. We help customers find the right solution at the right price.

                  With over 20 years' experience, we guarantee satisfaction!.
                  </p>
                </Info1>
                </div>
                <div className='info'>
                    <Info1>
                      <details className="causes-list">
                              <summary className='details-title'>1995</summary>
                              <div className="details-div">
                              <p className='details-para'>Start business with name S H Electronics co. with annual growth of 5%</p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2008</summary>
                              <div className="details-div">
                              <p className='details-para'><b> EL-Tech Electronics & Electricals Established in Pune</b></p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2010</summary>
                              <div className="details-div">
                              <p className='details-para'><b>Registered in MSME</b></p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2012</summary>
                              <div className="details-div">
                              <p className='details-para'>Eyematic Brand launch with integration of electronic security and surveillance.</p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details class="causes-list">
                              <summary className='details-title'>2013</summary>
                              <div className="details-div">
                              <p className='details-para'><b>Yearly Growth above 30%.</b></p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2014</summary>
                              <div className="details-div">
                              <p className='details-para'><b>Start National Basis Distribution with having 30 Dealers state wise.</b></p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2015</summary>
                              <div className="details-div">
                              <p className='details-para'>start to distribute Franchisee and various Business offers to peoples who can develop themselves</p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2016</summary>
                              <div className="details-div">
                              <p className='details-para'><b>increased Dealers and service Partners in Pan India with around 150+ dealers Start to Participate in.</b></p>
                              </div>
                      </details>
                      <hr className='underline'/>
                      <details className="causes-list">
                              <summary className='details-title'>2017</summary>
                              <div className="details-div">
                                <ol>
                                  <li className='details-para'>
                                  increased end user customers above 3000+
                                  </li>
                                  <li className='details-para'>
                                  we Offer lifetime Service and 5 Years product warranty to end users for better service.
                                  </li>
                                  <li className='details-para'>
                                  We acquired American Quality Certification (AQSR) CE, FCC,Rohs
                                  </li>
                                  <li className='details-para'>
                                  Acquired ISO 9001:2015 with American Quality Standard
                                  </li>
                                  <li className='details-para'>
                                  Certified in D&B, Smera,NSIC,SIDBI,Udyog Aadhar
                                  </li>
                                </ol>
                              </div>
                      </details>
                      <hr className='underline'/>
                    </Info1>
                  </div>
              </div>
        </div>
        
            <div className='section' style={{width:'100vw'}}>
                <div className='section1'>
                  <div className='childSection'>
                    <div className='info'>
                      <Info1>
                        <span className='span-title'>DEVELOPED BY Eyematic</span>
                        <h4 style={{fontSize:"36px", fontWeight:600, color:"white"}}>We work through every aspect at the planning</h4>
                        <span style={{fontSize:"13px", fontWeight:600, color:"white"}}><u>WE DO IT FOR YOU WITH LOVE</u></span>
                      </Info1>
                    </div>
                  </div>
                  <div className='childSection'>
                    <Details>
                      <span className='year'>2010</span>
                      <h4 className='year-info'>FOUNDING YEAR</h4>
                    </Details>
                    <Details>
                    <span className='year'>190</span>
                    <h4 className='year-info'>COMPANY WORK WITH US</h4>
                    </Details>
                    <Details>
                    <span className='year'>21</span>
                    <h4 className='year-info'>TEAM MEMBERS</h4>
                    </Details>
                    <Details>
                    <span className='year'>2000</span>
                    <h4 className='year-info'>HAPPY COSTUMERS</h4>
                    </Details>
                    <Details>
                    <span className='year'>2</span>
                    <h4 className='year-info'>OFFICES</h4>
                    </Details>
                    <Details>
                    <span className='year'>750</span>
                    <h4 className='year-info'>PROJECTS COMPLETED</h4>
                    </Details>
                  </div>
                </div>
            </div>
            <div className='newInfo3'>
                <div className='info1'>
                    <Info1>
                      <span className='span-title'>SOME WORDS ABOUT US</span>
                      <h4 style={{fontSize:'36px', fontFamily:'Poppins', textAlign:'justify'}} className='bold'>We Help You To Find Best CCTV</h4>
                    </Info1>
                </div>
                <div className='info1' style={{width:'300px'}}>
                  <Info1>
                    <h4 style={{fontSize:'18px'}} className='bold'>Happy clients</h4>
                    <p className='info-para' style={{color:'#777777'}}>A wonderful serenity has taken possession of my entire soul.</p>
                  </Info1>
                </div>
                <div className='info1' style={{width:'300px'}}>
                  <Info1>
                    <h4 style={{fontSize:'18px'}} className='bold'>Finished works</h4>
                    <p className='info-para' style={{color:'#777777'}}>Hierarchies of information, weight, emphasis process agreed.</p>
                  </Info1>
                </div>
            </div>
          
            <div className='newInfo2'>
              <div className='info2'>
                <Info1>
                  <h4 style={{fontSize:'36px'}}  className='bold'>Environments</h4>
                  <p>We offer also special video surveillance systems that can operate in highly exposed environments application in radiation environmentsapplication in hazardous areasapplication at high temperatures (up to 2000 °C)</p>
                </Info1>
              </div>
              <div className='info2'>
                <Info1>
                  <h4 style={{fontSize:'18px', color:'#242424'}}  className='bold'>Mission</h4>
                  <p>" Eyematic CCTV will be the leader in the delivery of video surveillance solutions. Through innovation we help customers find the right solutions. The skills and dedication of our staff will ensure our success. "</p>
                </Info1>
              </div>
              <div className='info2'>
                <Info1>
                  <h4 style={{fontSize:'18px',  color:'#242424'}}  className='bold'>Vision</h4>
                  <p>The Vision of Eyematic is to be the leading electronic security and surveillance systems integrator providing solutions to all emerging vertical sectors like Commercials, Governments, Industrial, Education, Residences, and Infrastructures.</p>
                  <ul>
                      <li>Having a customer centric focus and feedbacks.</li>
                      <li>Delivering cost effective people and property safety system solutions</li>
                      <li>Working together is to deliver the best attainable results.</li>
                      <li>Strong leadership and team building are encouraged at all levels of the business.</li>
                      </ul>
                </Info1>
              </div>
            </div>
            
              <div className='newInfo4'>
                <div className='newInfo5'>
                    <div className='info'>
                      <Info1>
                        <span className='span-title'>We Help You To Find Best CCTV</span>
                        <br/><br/>
                        <h2>Key Features</h2>
                        <hr className='underline'/>
                        <details className="causes-list">
                                  <summary className='details-title'>Superior image quality with advance digital recording</summary>
                                  <div className="details-div">
                                  <p className='details-para'>Eyematic CCTV Camera Features with Sony lens ensures superior clarity and wide-angle coverage.  Advance smart IR illuminators LED built around the lens capture clearest vision & boost quality of monochrome images at night as long as 30 to 1000 meters. We use technology like sony, Samsung, Panasonic, omni vision, processor hisilicon.</p>
                                  </div>
                          </details>
                          <hr className='underline'/>
                          <details className="causes-list">
                                  <summary className='details-title'>High Durability & Reliability</summary>
                                  <div className="details-div">
                                  <p className='details-para'>Eyematic Brand Offers plethora of products series Ranging from Old Analog Cameras, DVR, to HD DVR, Turbo HD-TVI, HD-CVI, IP Cameras, Wifi Cameras, Super AHD Cameras & many more.</p>
                                  </div>
                          </details>
                          <hr className='underline'/>
                          <details className="causes-list">
                                  <summary className='details-title'>Easy Operation</summary>
                                  <div className="details-div">
                                  
                                  </div>
                          </details>
                          <hr className='underline'/>
                      </Info1>
                    </div>
                  </div>
                  <div className='newInfo5'>
                    <div className='info'>
                      <Info1>
                        <h2>Our Focus</h2>
                        <hr className='underline'/>
                        <p className='info-para'>Eyematic standard business acumen on integration of electronic security and surveillance systems facilitate us to present advanced domain expertise and significance to our clients looking to solve demanding business problems around a broad range of security and surveillance technologies. We focus total customer satisfaction, outstanding service and the utmost level of quality.</p>
                      </Info1>
                    </div>
                  <Profile msg={"Company Profile"}/>
                  </div>
            </div>
             
        </div>
        <Footer/>
    </div>
  )
}

export default About