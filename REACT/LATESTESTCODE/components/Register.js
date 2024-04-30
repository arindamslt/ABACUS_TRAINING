import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Register() {
    let[register,setRegister]=useState({
    uname:"",
    pass:"",
    nm:"",
    email:"",
    phno:""
  });
  let[msg,showMsg]=useState("");
  var navigate=useNavigate();
  const addData=()=>{
    axios.post("http://localhost:1004/register/add",register)
    .then((res)=>{
        console.log(res.data);
        showMsg(res.data);
        navigate("/login");
       
    })
    .catch((error)=>{
        console.log(error);
        alert("SOMETHING WRONG ON FETCHING DATA");
    })
  }
  const refreshData=()=>{
    setRegister({
      uname:"",
      pass:"",
      nm:"",
      email:"",
      phno:""
    })
    showMsg("");
  }
  return (
    <div style={{width:"30%",margin:"25px auto"}}>
      <input className='form-control' type="text" placeholder='ENTER THE USERNAME' value={register.uname}
      onChange={(event)=>{
       setRegister({
        ...register,
        uname:event.target.value
       })
      }}></input>
      <input className='form-control' type="password" placeholder='ENTER THE PASSWORD' value={register.pass}
      onChange={(event)=>{
       setRegister({
        ...register,
        pass:event.target.value
       })
      }}></input>
      <input className='form-control' type="text" placeholder='ENTER THE NAME' value={register.nm}
      onChange={(event)=>{
       setRegister({
        ...register,
        nm:event.target.value
       })
      }}></input>
      <input className='form-control' type="text" placeholder='ENTER THE EMAIL' value={register.email}
      onChange={(event)=>{
       setRegister({
        ...register,
        email:event.target.value
       })
      }}></input>
      <input className='form-control' type="text" placeholder='ENTER THE PHONE NUMBER' value={register.phno}
      onChange={(event)=>{
       setRegister({
        ...register,
        phno:event.target.value
       })
      }}></input>
      <button className='btn btn-outline-primary' onClick={addData}>ADD</button>&nbsp;&nbsp;
      <button className='btn btn-outline-primary' onClick={refreshData}>REFRESH</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default Register
