import React from 'react'
import { useState } from 'react'
function StateDemo() {
    let[state,setState]=useState("data:image/png;base64,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");
      const changeToAngular=()=>{
        setState("data:image/png;base64,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");
      }
      const changeToReact=()=>{
        setState("data:image/png;base64,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");
      }

    return (
    <div>
      <img src={state}
      height="200px" width="200px" alt="NO IMAGE"/>
      <br></br>
      <button onClick={changeToAngular}>ANGULAR</button>&nbsp;&nbsp;
      <button onClick={changeToReact}>REACT</button>
    </div>
  )
}

export default StateDemo
