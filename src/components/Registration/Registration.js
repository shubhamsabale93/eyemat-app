import React from 'react'
import './Registration.css'

export default function Registration() {
  return (
    <div className='rform-container'>
        <h2 className='rform-title'>Your Personal Information</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='Name' id='name'/>
        <label htmlFor='email'>Email</label>
        <input type='text' placeholder='Email' id='email'/>
        <label htmlFor='message'>Message</label>
        <textarea placeholder='Message' id='message' rows={4}></textarea>
        <button className='rform-btn'>send</button>
    </div>
  );
}