import React from 'react'
import './Auth.css'
import logo from '../../img/logo.png'

export const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={logo} alt="" />
            <div className="WebName">
                <h1>Connect Me!</h1>
                <h6>Getting people closer</h6>
            </div>
        </div>
        <h1>form</h1>
    </div>
  )
}
