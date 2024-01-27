import React from 'react'
import './App.css'
function Login() {
  return (
    <>
        <h1>Login</h1>
        <div class="login">
         Email  : <input type="email" placeholder='email@gamil.com'/><br/><br/>
         Password :   <input type="password" placeholder='password'/><br/><br/>
           <button id="login">Submit</button>
        </div>
        </>
  )
}

export default Login