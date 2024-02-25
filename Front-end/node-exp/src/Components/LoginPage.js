import React from 'react'
import LoginForm from './LoginForm'
import {loginPageBackground} from '../Constants&Utilities/urls'

const LoginPage = () => {
  return (
    <div className=''>
      <img className='h-[100vh] w-full absolute -z-50' alt='' src={loginPageBackground}></img>
      <div className='w-full h-screen flex items-center justify-center'><LoginForm/></div>
    </div>
  )
}

export default LoginPage
