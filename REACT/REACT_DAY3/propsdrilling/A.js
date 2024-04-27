import React from 'react'
import { useState } from 'react'
import B from './B';
function A() {
    let[state,setState]=useState("");
    const populateValue=(event)=>{
   setState(event.target.value);
    }
  return (
    <div>
      <h2>A COMPONENT</h2>
      <input type="text" placeholder='ENTER YOUR NAME' onChange={populateValue}></input>
      <B data={state}/>
    </div>
  )
}

export default A
