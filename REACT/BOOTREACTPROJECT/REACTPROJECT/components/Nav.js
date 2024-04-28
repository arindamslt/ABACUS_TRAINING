import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer' >
     <div className='lftContainer'>
        <h2>FOODAPP</h2>
      </div>
      <div className='rhtConatiner'>
        <a href="\home">HOME</a>
        <a href="\food">FOOD</a>
        <a href="\flist">FOODLIST</a>
        <a href="\contact">CONTACTUS</a>
       
      </div>
    </div>
  )
}

export default Nav
