import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function SearchFood() {
  let[food,setFood]=useState({
    foodid:"",
    foodnm:"",
    fprice:""
  });
  let[data,setData]=useState({
    foodid:"",
    foodnm:"",
    fprice:""
  });
  const searchData=(foodid)=>{
    axios.get(`http://localhost:1004/food/fetch/${foodid}`)
    .then((res)=>{
      console.log(foodid);
        console.log(res.data);
        setData(res.data);
        setFood({
          foodid:""
        })
       
    })
    .catch((error)=>{
        console.log(error);
        alert("SOMETHING WRONG ON FETCHING DATA");
    })

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
        <button className='btn btn-outline-success' onClick={()=>{
          searchData(food.foodid);
        }}>SEARCH</button>
        {
          <table cellPadding={10} style={{margin:"10px auto"}}>
          <thead style={{backgroundColor:"black",color:"white"}}>
              <tr>
              <th>FOOD ID</th>
              <th>FOOD NAME</th>
              <th>PRICE</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.foodid}</td>
              <td>{data.foodnm}</td>
              <td>{data.fprice}</td>
            </tr>
          </tbody>
          </table>
        }
    </div>
  )
}

export default SearchFood
