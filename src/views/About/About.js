import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Info from './Info'
import Info1 from './Info1'
import about1 from './about1.png'
import about2 from './about2.png'
import cctv1 from './img1.jpg'
import './About.css'
 

function About() {
  return (
    <div>
      <Navbar/>
        <div className='main'>
          <div className='newInfo1'>
            <img className='about1' src={about1} alt='about1'/>
            <div className='info'>
            <Info1>
              <h2 className='info-head'>We Help You To Find Best CCTV</h2>
              <hr className='underline'/>
              <p className='info-para'>
              Eyematic CCTV is a Indian owned company that specialises in the design, supply, installation and maintenance of video surveillance systems. These systems are designed to suit customer’s individual requirements. As we specialise in video surveillance systems, our focused in-depth understanding of the latest technologies, enables us to designs systems and source products that can best meet the specific needs of our customers and the industry.

    Eyematic CCTV has been at the forefront of the Video Surveillance and Closed Circuit Television (CCTV) Industry in Pune (India)  since 1995. Eyematic's experience, knowledge and innovation, ensures that we will satisfy the highest customer expectations. We help customers find the right solution at the right price.

    With over 20 years' experience, we guarantee satisfaction!.
              </p>
            </Info1>
            </div>
           </div>
           <hr className='underline'/>
          <div className='newInfo1'>
          <div className='info info1'>
            <Info>
              <h2 style={{marginBottom:"3rem"}}>ABOUT US</h2>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><g clip-path="url(#clip0)"><path d="M23.2416 18.9968C26.1027 21.6884 28.9338 23.2532 29.053 23.3184L29.6508 23.6462L30.2467 23.315C30.3657 23.2489 33.1945 21.6646 36.0538 18.9642C39.3187 15.8805 41.9996 11.9201 41.9996 7.41186C41.9996 3.32505 38.6747 0.000167847 34.5879 0.000167847C32.7303 0.000167847 30.9924 0.673479 29.6468 1.88381C28.3011 0.673479 26.5633 0.000167847 24.7056 0.000167847C20.6188 0.000167847 17.2939 3.32505 17.2939 7.41186C17.2939 9.62334 17.9344 11.85 19.1975 14.0299C20.1798 15.7254 21.5404 17.3965 23.2416 18.9968ZM24.7056 2.47073C26.2742 2.47073 27.7152 3.19139 28.6591 4.44784L29.6468 5.76267L30.6344 4.44784C31.5783 3.19139 33.0193 2.47073 34.5879 2.47073C37.3124 2.47073 39.529 4.68732 39.529 7.41186C39.529 14.123 31.8654 19.406 29.6431 20.7964C27.4192 19.4195 19.7645 14.1866 19.7645 7.41186C19.7645 4.68732 21.9811 2.47073 24.7056 2.47073V2.47073Z" fill="#83B735"></path><path d="M38.0188 26.542C37.6852 26.548 37.3488 26.6022 36.9904 26.7078L28.3975 29.2353C28.2527 27.4334 26.9751 25.9283 25.1893 25.5071C25.1194 25.4892 26.0397 25.7242 17.6083 23.571C16.8175 23.4014 15.9943 23.4471 15.2342 23.7005C14.9402 23.7966 16.4052 23.3177 11.7721 24.8325C9.946 25.4412 8.9133 25.785 7.41177 25.8984V22.2352H0V41.9997H7.41169V38.2938H9.88226C11.4089 38.2938 12.928 38.5029 14.3978 38.9153C14.4061 38.9175 25.7291 41.8662 25.791 41.8807C26.9992 42.1633 28.3034 41.9107 29.3679 41.1785C40.4802 33.5437 39.4799 34.2026 40.052 33.848L40.1553 33.7838C42.3088 32.4409 42.6333 29.4394 40.8295 27.6672C40.0833 26.9338 39.0602 26.5263 38.0188 26.542V26.542ZM4.94113 39.5292H2.47056V24.7058H4.94113V39.5292ZM38.8484 31.6873L38.7499 31.7484C38.0718 32.1692 39.0222 31.5502 27.9675 39.1431C27.4789 39.4792 26.865 39.6185 26.2718 39.4542L15.0537 36.5335C13.3704 36.0622 11.6305 35.8233 9.88217 35.8233H7.41169V28.3736C9.33585 28.2484 10.6264 27.8186 12.5533 27.1764L16.0083 26.0467C16.3502 25.9326 16.7167 25.9104 17.0699 25.9824C17.1482 26.0024 16.1633 25.7508 24.6164 27.9104C26.0283 28.2382 26.4075 30.0491 25.2826 30.9274C24.8642 31.2541 24.3286 31.3675 23.8138 31.2389L17.5937 29.6838L16.9945 32.0806L23.2147 33.6357C24.9157 34.0611 26.6264 33.3867 27.6104 32.0422C38.1373 28.961 37.7654 29.0175 38.0627 29.0122C38.8537 28.9996 39.5292 29.6389 39.5292 30.4598C39.529 30.9627 39.2745 31.4215 38.8484 31.6873V31.6873Z" fill="#83B735"></path></g><defs><clipPath id="svg-7724"><rect width="42" height="42" fill="white"></rect></clipPath></defs></svg>
            </Info>
          </div>
          <div className='info info2'>
            <Info>
              <h2>Happy clients</h2>
              <p>A wonderful serenity has taken possession of my entire soul.</p>
              <svg id="svg-8446" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M20.1735 29.343L18.3924 27.5409L16.4444 29.5122L20.1735 33.2853L26.6577 26.7245L24.7097 24.7533L20.1735 29.343Z" fill="#83B735"></path><path d="M39 16.9115H36.2449V9.17932L27.1726 0H5.93878V14.1239H3V42H39V16.9115ZM27.9796 4.75873L31.5417 8.36283H27.9796V4.75873ZM8.69388 2.78761H25.2245V11.1504H33.4898V16.9115H24.4175L21.6624 14.1239H8.69388V2.78761ZM5.7551 39.2124V16.9115H20.5213L23.2764 19.6991H36.2449V39.2124H5.7551Z" fill="#83B735"></path><path d="M11.449 8.36283H22.4694V11.1504H11.449V8.36283Z" fill="#83B735"></path></svg>
            </Info>
          </div>
          <div className='info2'>
            <Info>
              <h2>Finished works</h2>
              <p >Hierarchies of information, weight, emphasis process agreed.</p>
              <p >SOME WORDS ABOUT WORK</p>
            </Info>
          </div>
        </div>
        <hr className='underline'/>
        <div className='newInfo1'>
          <img className='about2' src={cctv1} alt='about2'/>
          <div className='info'>
            <Info1>
              <h2>Delivering Customer Value</h2>
              <hr className='underline'/>
              <p className='info-para'>Eyematic CCTV is differentiated in the marketplace because we focus on the creation of value for our customers. We believe value is created by providing readily customised, reliable and easy to maintain video surveillance solutions that do truly provide the intended result for our customers.When you deal with eyematic CCTV you are guaranteed the highest level of service, with high quality products and services that we stand behind. Our over 20 years industry experience, guarantees that Eyematic CCTV has the essential knowledge, processes and systems in place to meet the most demanding requirements. Eyematic  looks forward to working with you to satisfy your video surveillance needs.</p>
            </Info1>
          </div>
          </div>
          <hr className='underline'/>
          <div className='newInfo1'>
          <div className='info'>
            <Info1>
              <h2>Our Solutions</h2>
              <hr className='underline'/>
              <p className='info-para'>We offer to our customers following solutions:solutions for trade & servicessolutions for transport & logistic servicessolutions for banking & financial institutionssolutions for schoolssolutions for hotelssolutions for transportation (motorways, tunnels, airports)solutions for nuclear power industrysolutions for oil, gas and chemical industrysolutions for army and policethermal cameras and systems</p>
            </Info1>
          </div>
          <img className='about3' src={about2} alt='about3'/>
          </div>
          <hr className='underline'/>
            <div className='newInfo'>
              <div className='info'>
                <Info>
                  <h2>Environments</h2>
                  <p className='info-para'>We offer also special video surveillance systems that can operate in highly exposed environmentsapplication in radiation environmentsapplication in hazardous areasapplication at high temperatures (up to 2000 °C)
                  ABOUT WORK</p>
                </Info>
              </div>
              <div className='info'>
                <Info>
                  <h2>Products & Services</h2>
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
                      <li className='info-para'>Luggage and Parcel Inspection Systems</li>
                      <li className='info-para'>RFID Inventory and Asset Management</li>
                      <li className='info-para'>Intruder Alarm Systems (IAS)</li>
                  </ul>
                </Info>
              </div>
              <div className='info info3'>
                <Info>
                  <h2>History</h2>
                  <ul>1995
                    <li className='info-para'>
                      Start business with name S H Electronics co. with annual growth of 5%
                    </li>
                  </ul>
                  <ul>2008
                    <li className='info-para'>
                      <b> EL-Tech Electronics & Electricals Established in Pune</b>
                    </li>
                  </ul><ul>2010
                    <li className='info-para'>
                      <b>Registered in MSME</b>
                    </li>
                  </ul><ul>2012
                    <li className='info-para'>
                    Eyematic Brand launch with integration of electronic security and surveillance.
                    </li>
                  </ul><ul>2013
                    <li className='info-para'>
                      <b>Yearly Growth above 30%.</b>
                    </li>
                  </ul>
                  <ul>2014
                    <li className='info-para'>
                      <b>Start National Basis Distribution with having 30 Dealers state wise.</b>
                    </li>
                  </ul>
                  <ul>2015
                    <li className='info-para'>
                    start to distribute Franchisee and various Business offers to peoples who can develop themselves
                    </li>
                  </ul>
                  <ul>2016
                    <li className='info-para'>
                      <b>increased Dealers and service Partners in Pan India with around 150+ dealers Start to Participate in.</b>
                    </li>
                  </ul>
                  <ol>2017
                    <li className='info-para'>
                    increased end user customers above 3000+
                    </li>
                    <li className='info-para'>
                    we Offer lifetime Service and 5 Years product warranty to end users for better service.
                    </li>
                    <li className='info-para'>
                    We acquired American Quality Certification (AQSR) CE, FCC,Rohs
                    </li>
                    <li className='info-para'>
                    Acquired ISO 9001:2015 with American Quality Standard
                    </li>
                    <li className='info-para'>
                    Certified in D&B, Smera,NSIC,SIDBI,Udyog Aadhar
                    </li>
                  </ol>
                </Info>
              </div>
            </div>
            <hr className='underline'/>
            <div className='newInfo'>
              <div className='info'>
                <Info1>
                  <h2>Our Mission</h2>
                  <hr className='underline'/>
                  <p className='info-para'><b>” Eyematic CCTV will be the leader in the delivery of video surveillance solutions. Through innovation we help customers find the right solutions. The skills and dedication of our staff will ensure our success. ”</b></p>
                </Info1>
              </div>
              <hr className='underline'/>
              <div className='info'>
                <Info1>
                  <h2>Review</h2>
                  <p className='innfo-para'>
                    <b>
                      ”They are good people to do business.” - Ashvin Hiwale</b>
                  </p>
                </Info1>
              </div>
              </div>
              <hr className='underline'/>
              <div className='newInfo1'>
              <div className='info'>
                <Info1>
                  <h2>Vision</h2>
                  <hr className='underline'/>
                  <p className='info-para'>The Vision of Eyematic is to be the leading electronic security and surveillance systems integrator providing solutions to all emerging vertical sectors like Commercials, Governments, Industrial, Education, Residences, and Infrastructures.</p>
                  <ul>
                    <li className='info=para'>Having a customer centric focus and feedbacks.</li>
                    <li className='info=para'>Delivering cost effective people and property safety system solutions</li>
                    <li className='info=para'>Working together is to deliver the best attainable results.</li>
                    <li className='info=para'>Strong leadership and team building are encouraged at all levels of the business.</li>
                  </ul>
                </Info1>
              </div>
              <div className='info'>
                <Info1>
                  <h2>Key Features</h2>
                  <hr className='underline'/>
                  <ul>
                    <li className='info=para'>Superior image quality with advance digital recording</li>
                    <li className='info=para'>Eyematic CCTV Camera Features with Sony lens ensures superior clarity and wide-angle coverage. Advance smart IR illuminators LED built around the lens capture clearest vision & boost quality of monochrome images at night as long as 30 to 1000 meters. We use technology like sony, Samsung, Panasonic, omni vision, processor hisilicon.</li>
                    <li className='info=para'>High Durability, Reliability & Easy Operation</li>
                    <li className='info=para'>Eyematic Brand Offers plethora of products series Ranging from Old Analog Cameras, DVR, to HD DVR, Turbo HD-TVI, HD-CVI, IP Cameras, Wifi Cameras, Super AHD Cameras & many more.</li>
                  </ul>
                </Info1>
              </div>
              </div>
              <hr className='underline'/>
        </div>
    </div>
  )
}

export default About