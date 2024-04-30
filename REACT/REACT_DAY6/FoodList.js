import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function FoodList() {
    let[food,setFood]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1004/food/fetch")
        .then((res)=>{
            console.log(res.data);
            setFood(res.data);
           
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WRONG ON FETCHING DATA");
        })
    },[])
  return (
    <div>
        {
        food.length>0 ?
        <div>
            <table cellPadding={10} style={{margin:"10px auto"}}>
                <thead style={{backgroundColor:"black",color:"white"}}>
                    <tr>
                    <th>FOOD ID</th>
                    <th>FOOD NAME</th>
                    <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        food.map((element,index)=>{
                            return(
                               <tr>
                                <td>{element.foodid}</td>
                               <td>{element.foodnm}</td>
                                <td>{element.fprice}</td>
                               </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
            </div>:<h2 style={{color:"red"}}>NO FOOD AVAILABLE</h2>
      }
    </div>
  )
}

export default FoodList
