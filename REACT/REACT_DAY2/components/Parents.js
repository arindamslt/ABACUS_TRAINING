import React, { useState } from 'react'
import Childs from './Childs'
function Parents() {
    let[info,setInfo]=useState("");
    const populateValue=(event)=>{
     setInfo(event.target.value);
    }
  return (
    <div>
      <h2>PARENT COMPONENT</h2>
      <input type="text" placeholder='ENTER YOUR NAME' onChange={populateValue}></input>
      <Childs data={info}/>
    </div>
  )
}

export default Parents
