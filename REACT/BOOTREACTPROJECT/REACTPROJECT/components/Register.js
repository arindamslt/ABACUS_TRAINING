import React from 'react'

function Register() {
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
     <input className='form-control' type="text" placeholder='ENTER THE USERNAME'></input>
      <input className='form-control' type="text" placeholder='ENTER THE PASSWORD'></input>
      <input className='form-control' type="text" placeholder='ENTER THE NAME'></input>
      <input className='form-control' type="text" placeholder='ENTER THE EMAIL'></input>
      <input className='form-control' type="text" placeholder='ENTER THE PHONE NUMBER'></input>
      <button className='btn btn-outline-primary'>REGISTER</button> 
    </div>
  )
}

export default Register
