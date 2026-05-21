import React from 'react'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
    <div
      className='card mx-auto mt-5 shadow p-4'
      style={{ width: '30rem' }}
    >
      <div className='card-header bg-white border-0'>
        <h1 className='card-title text-center fw-bold'>Sign in</h1>
        <p className='text-center'>Create your account for free</p>
      </div>

      <form className='bg-light'>
        <div className="mb-3 text-start">
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your name'
          />
        </div>

        <div className="mb-3 text-start">
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email'
          />
        </div>

        <div className="mb-3 text-start">
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter your password'
          />
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
        >
          Register
        </button>

        <p className='text-center mt-3'>
          Already have an account?{" "}
          <Link to='/Login' className='text-decoration-none'>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Reg