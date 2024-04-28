import React from 'react'

function SearchFood() {
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
       <input className='form-control' type="text" placeholder='ENTER THE FOOD ID'></input>
      <button className='btn btn-outline-success'>SEARCH</button>
    </div>
  )
}

export default SearchFood
