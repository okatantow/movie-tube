import React from 'react'
import './SignupScreen.css'

function SignupScreen() {
    const register = (e)=>{
       e.preventDefault();
    }
    const signIn = (e)=>{
        e.preventDefault();
     }
  return (
    <div className='signupScreen'>
       <form>
        <h1>
            Sign In
        </h1>
        <input placeholder='Email' type='email'/>
        <input placeholder='Password' type='password'/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
            <span className='signupScreen_gray'>New to Movie Tube?</span>
            <span className='signupScreen_link' onClick={register}>Sign Up now</span>
        </h4>
       </form>
    </div>
  )
}

export default SignupScreen