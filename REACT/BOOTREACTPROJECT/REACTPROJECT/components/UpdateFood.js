import React from 'react'

function UpdateFood() {
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
       <input className='form-control' type="text" placeholder='ENTER THE FOOD NAME'></input>
      <input className='form-control' type="text" placeholder='ENTER THE FOOD PRICE'></input>
      <button className='btn btn-outline-primary'>UPDATE</button>
    </div>
  )
}

export default UpdateFood
