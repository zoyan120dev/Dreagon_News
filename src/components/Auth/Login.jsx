import React from 'react'
import { Link } from 'react-router';

function Login() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Login your account
          </h1>
          <div className="card-body">
            <form>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
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