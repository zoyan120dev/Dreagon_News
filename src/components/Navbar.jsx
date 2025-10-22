import React from 'react'
import { NavLink } from 'react-router'
import user from '../assets/user.png'

function Navbar() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div></div>
        <div className='flex gap-5 items-center text-accent'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className='flex gap-5 items-center'>
            <img src={user} alt="" />
          <button className="btn btn-primary px-10">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar