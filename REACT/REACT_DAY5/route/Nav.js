import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import Main from '../condrender/Main'
function Nav() {
  return (
    <div className='navContainer'>
       
      <div className='lftContainer'>
        <h2>MYAPPP</h2>
      </div>
      <div className='rhtConatiner'>
        <a href="\profile">PROFILE</a>
        <a href="\user">USER</a>
        <a href="\uinfo">USERINFO</a>
        <a href="\props">PROPS</a>
        <a href="\product">PRODUCT</a>
        <a href="\condrend">LOGIN REGISTER</a>
      </div>
    </div>
  )
}

export default Nav
