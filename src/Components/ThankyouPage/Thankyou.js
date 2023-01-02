import React from 'react';
import './styleThankyou.css';
import {Link} from 'react-router-dom';

function Thankyou() {
  return (
    <div className='thankyou-page'>
        <div className='thankyou-box'>
        <h1>Thank You!</h1>
        <p><span>You can find information about your booking on your </span> Account</p>     
        <Link to='/profile'><button>Go to Account</button></Link>
        </div>
    </div>
  )
}

export default Thankyou;
