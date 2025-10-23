import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import users from '../assets/user.png'
import { AuthContext } from './provider/AuthProvider';

function Navbar() {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
     logOut()
     .then(() => {
       alert('You logged out successfully')
     })
     .catch(error => {
      console.log(error)
     })
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <p>{user && user.email}</p>
        <div className="flex gap-5 items-center text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-5 items-center">
          <div className='flex items-center gap-2'>
            <img
              className="w-12 rounded-full h-12"
              src={`${user ? user.photoURL : users}`}
              alt=""
            />
            <p className='text-lg font-bold'>{user?.displayName}</p>
          </div>
          {user ? (
            <Link onClick={handleLogout} className="btn btn-primary px-10">
              Logout
            </Link>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar