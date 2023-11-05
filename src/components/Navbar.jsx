import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
//  console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }
  
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-purple-600 text-4xl font-bold cursor-pointer hover:text-purple-700'>
          StreamPal
        </h1>
      </Link>
      {user?.email ? 
        <div>
          <Link to='/account'>
            <button className='text-white mr-4 px-4 py-[0.2rem] w-[6rem] border border-white rounded hover:border-opacity-0 hover:bg-white/75 hover:text-black'>Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-purple-600 px-4 py-1 rounded cursor-pointer text-white hover:bg-purple-700'>Log Out</button>
        </div> : 
        <div>
          <Link to='/login'>
            <button className='text-white mr-4 px-4 py-[0.2rem] w-[6rem] border border-white rounded hover:border-opacity-0 hover:bg-white/75 hover:text-black'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-purple-600 px-4 py-1 rounded cursor-pointer text-white hover:bg-purple-700'>Sign Up</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Navbar