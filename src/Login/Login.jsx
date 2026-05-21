import React, { useState } from 'react'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (

    <div
      className='card mx-auto mt-5 shadow p-4'
      style={{ width: '30rem' }}
    >
      <div className='card-header bg-white border-0'>
        <h1 className='card-title text-center fw-bold'>
          Sign In
        </h1>
        <p>
          Enter your mobile number and password to get started
        </p>
        <hr />
      </div>
      <div className='card-body bg-light'>
        <form>
          <div className="mb-3 text-start">

            <label className="form-label">
              Mobile
            </label>
            <div className="input-group">
              <span className="input-group-text">
                +91
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
          <div className="mb-3 text-start">

            <label className="form-label">
              Password
            </label>
             <div class="input-group">
                {/* Lock Icon */}
      <span className='input-group-text'><i className="bi bi-lock"></i></span>
              <input
              
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
              />
              <span
                className="input-group-text"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >

                {
                  showPassword
                    ? <i className="bi bi-eye-slash"></i>
                    : <i className="bi bi-eye"></i>
                }
                  
              </span>
            </div>
            <div className='text-end mt-2'>

              <a href="#"  className="text-decoration-none text-dark">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className='form-check mb-3'>

            <input
              type='checkbox'
              className='form-check-input'
              id='check'
            />

            <label
              className='form-check-label'
              htmlFor='check'
            >
              I have read and accept the terms and conditions,
              privacy policy, and EULA agreement
            </label>
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              className='btn btn-primary w-100  bg-white text-dark'
            >
              Continue
            </button>
          </div>
          <div className='text-center'>
            <a href="#"  className="text-decoration-none text-dark">
              Need help?
            </a>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login