import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AddFood() {
  let[food,setFood]=useState({
    foodid:"",
    foodnm:"",
    fprice:""
  });
  let[msg,showMsg]=useState("");
  const addData=()=>{
    axios.post("http://localhost:1004/food/add",food)
    .then((res)=>{
        console.log(res.data);
        showMsg(res.data);
       
    })
    .catch((error)=>{
        console.log(error);
        alert("SOMETHING WRONG ON FETCHING DATA");
    })
  }
  const refreshData=()=>{
    setFood({
      foodid:"",
      foodnm:"",
      fprice:""
    })
    showMsg("");
  }
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
      <input className='form-control' type="text" placeholder='ENTER THE FOOD NAME' value={food.foodnm}
      onChange={(event)=>{
       setFood({
        ...food,
        foodnm:event.target.value
       })
      }}></input>
    <input className='form-control' type="text" placeholder='ENTER THE FOOD PRICE' value={food.fprice}
      onChange={(event)=>{
       setFood({
        ...food,
        fprice:event.target.value
       })
      }}></input>
      <button className='btn btn-outline-primary' onClick={addData}>ADD</button>&nbsp;&nbsp;
      <button className='btn btn-outline-primary' onClick={refreshData}>REFRESH</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default AddFood
