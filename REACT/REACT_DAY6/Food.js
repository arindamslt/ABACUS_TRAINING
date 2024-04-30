import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import "./Food.css"
function Food() {
  return (
    <div className='prdContainer'>
      <div className='lContainer'>
        <Link to="add">ADD FOOD</Link>
        <Link to="del">DELETE FOOD</Link>
        <Link to="upd">UPDATE FOOD PRICE</Link>
        <Link to="search">SEARCH FOOD</Link>
        </div>
        <div className='rContainer'>
         <Outlet/>
        </div>
    </div>
  )
}

export default Food
