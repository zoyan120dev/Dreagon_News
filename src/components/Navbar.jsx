import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import user from '../assets/user.png'
import { AuthContext } from './provider/AuthProvider';

function Navbar() {
  const {user} = use(AuthContext)
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>{user && user.email}</div>
        <div className='flex gap-5 items-center text-accent'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className='flex gap-5 items-center'>
            <img src={user} alt="" />
          <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar