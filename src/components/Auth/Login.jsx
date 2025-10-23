import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router';
import  { AuthContext } from '../provider/AuthProvider';

function Login() {
  const {signInWithEmailAndPasswords} = use(AuthContext)
  const [error , SetError] = useState('')
  
  
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPasswords(email , password)
    .then(result => {
      console.log(result)
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(errorCode => {
      console.log(error)
      SetError(errorCode)
    })
    
  }
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Login your account
          </h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label  className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required/>
                <label className="label">Password</label>
                <input
                  type="password"
                  name='password'
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {
                  error && <p className='text-sm text-red-400'>{error.message}</p>
                }
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p className='text-accent font-semibold text-center'>
              Dont’t Have An Account ?
              <Link to="/auth/register" className='text-secondary'>Register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login