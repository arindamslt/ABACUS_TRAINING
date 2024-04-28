import React from 'react'

function Login() {
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
     <input className='form-control' type="text" placeholder='ENTER THE USERNAME'></input>
      <input className='form-control' type="text" placeholder='ENTER THE PASSWORD'></input>
      <button className='btn btn-outline-dark'>LOGIN</button> 
    </div>
  )
}

export default Login
