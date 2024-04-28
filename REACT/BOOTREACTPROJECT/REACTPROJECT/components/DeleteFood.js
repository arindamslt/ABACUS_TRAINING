import React from 'react'

function DeleteFood() {
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
       <input className='form-control' type="text" placeholder='ENTER THE FOOD ID'></input>
      <button className='btn btn-outline-dark'>DELETE</button>
    </div>
  )
}

export default DeleteFood
