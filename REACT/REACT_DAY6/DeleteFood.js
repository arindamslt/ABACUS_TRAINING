import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function DeleteFood() {
  let[food,setFood]=useState({
    foodid:"",
    foodnm:"",
    fprice:""
  });
  let[msg,showMsg]=useState("");
  const deleteData=(foodid)=>{
    axios.delete(`http://localhost:1004/food/del/${foodid}`)
    .then((res)=>{
      console.log(foodid);
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
      <input className='form-control' type="text" placeholder='ENTER THE FOOD NAME' value={food.foodid}
      onChange={(event)=>{
       setFood({
        ...food,
        foodid:event.target.value
       })
      }}></input>
      <button className='btn btn-outline-dark' onClick={()=>{
        deleteData(food.foodid);
      }}>
        DELETE</button>
      <button className='btn btn-outline-primary' onClick={refreshData}>REFRESH</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default DeleteFood
