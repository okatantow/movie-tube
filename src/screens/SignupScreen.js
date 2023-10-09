import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from '../firebase';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=>{

      createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
          // ..
        });
        e.preventDefault();
    }
    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
     }
  return (
    <div className='signupScreen'>
       <form>
        <h1>
            Sign In
        </h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password'/>
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