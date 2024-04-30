import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
  let[register,setRegister]=useState({
    uname:"",
    pass:"",
    nm:"",
    email:"",
    phno:""
  });
  let[msg,showMsg]=useState("");
  var navigate=useNavigate();
  const checkLogin=(uname,pass)=>{
    console.log(uname);
    console.log(pass);
    axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
    .then((res)=>{
        console.log(res.data);
        showMsg(res.data);
        if(res.data==="LOGIN SUCCESSFULL")
        {
          navigate("/nav");
        }
       else{
        navigate("/");
       }
    })
    .catch((error)=>{
        console.log(error);
        alert("SOMETHING WRONG ON FETCHING DATA");
    })
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
      <button className='btn btn-outline-dark'
      onClick={()=>{
        checkLogin(register.uname,register.pass);
      }}>LOGIN</button> 
    </div>
  )
}

export default Login
