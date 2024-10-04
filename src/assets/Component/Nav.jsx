import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <nav className='text-3xl flex justify-center gap-10'>
         <NavLink style={(e)=> {
            return{
              color: e.isActive ? "#fca5a5" : " ",
              fontWeight: e.isActive ? "bold" : " ",
            }
         }} to='/Home'>Home</NavLink>

         <NavLink className={(e)=> {
          return[
            e.isActive ? "text-red-400": "",
            e.isActive ? "font-bold": "",
          ].join(" ");
         }} to='/User'>User</NavLink>

         <NavLink style={(e)=>{
            return{
              color: e.isActive ? "#fca5a5" : " ",
              fontWeight: e.isActive ? "bold" : " ",
            }
         }} to='/About'>About</NavLink>
      </nav>
    </div>
  )
}

export default Nav