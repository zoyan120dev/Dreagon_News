import React from 'react'
import { Link } from 'react-router';

function Register() {

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password  = form.password.value;
        const photo = form.photo.value;
    }
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Login your account
          </h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" required />

                {/* Photo url */}
                <label className="label">Photo Url</label>
                <input name='photo' type="text" className="input" placeholder="Photo Url" required/>
                {/* email */}
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required/>
                {/* password */}
                <label className="label">Password</label>
                <input
                  name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button type='submit' className="btn btn-neutral mt-4">Ragister</button>
              </fieldset>
            </form>
            <p className="text-accent font-semibold text-center">
              Already  Have An Account ?
              <Link to="/auth/login" className="text-secondary">
               Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register