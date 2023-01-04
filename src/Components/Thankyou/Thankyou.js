import React from 'react';
import {Link} from 'react-router-dom'
import './styleThankyou.css'

function Thankyou() {
  return (
    <div className='thankyou-page'>
        <div className='thankyou-box'>
        <h1>Thank You!</h1>
        <p><span>You can find information about your booking on your </span> Account</p>     
        <Link  to='/profile' className='link'>Go to Account</Link>
        </div>
    </div>
  )
}

export default Thankyou
