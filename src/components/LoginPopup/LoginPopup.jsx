import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = (setShowLogin) => {

  const [currState, setCurrState] = useState("Ingresar")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            <input type="text" placeholder='Tu nombre' required />
            <input type="email" placeholder='Tu Email' required/>
            <input type="password" placeholder='Tu Password' required />
        </div>

      </form>
    </div>
  )
}

export default LoginPopup
