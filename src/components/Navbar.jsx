import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FaSignOutAlt, FaUser, FaSearch, FaHome, FaQuestionCircle } from 'react-icons/fa'

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
    <div className='flex absolute justify-between items-center p-4 h-[70px] w-full bg-purpal-500 shadow-[inset_0_-4px_0px_rgba(30,29,25,0.25)] z-20'>
      <div className='absolute top-0 left-0 right-0 z-19 h-[100%] w-[100%] bg-gradient-to-b from-tanpal-500/40'></div>
      <Link to='/'>
        <div className='absolute top-0 w-[200px] h-[150px] z-20'>
          <svg className='z-21 fill-blapal-500 pt-2 top-0 mt-[-1.75rem] hover:fill-tanpal-500 duration-500' viewBox="0 0 478.86 256.76"><path d="m357,151.7h-74.2c-1.98,0-3.36-1.61-3.08-3.58l5.55-39.48c.28-1.98,2.11-3.58,4.09-3.58h74.2c1.98,0,3.36,1.61,3.08,3.58l-5.55,39.48c-.28,1.98-2.11,3.58-4.09,3.58Zm-71.65-5.37h70.62l5.04-35.89h-70.62l-5.04,35.89Z"/><polygon points="310.41 141.24 338.38 128.26 315.84 115.65 310.41 141.24"/><path d="m9.95,150.73c-1.57,0-2.16-.69-1.94-2.26l1.03-7.34c.22-1.57,1.01-2.26,2.58-2.26h16.88c1.07,0,1.75-.82,1.89-1.82.2-1.44-.28-2.01-1.33-2.13l-9.23-1.32c-5.77-.88-9.25-3.39-8.26-10.42l.93-6.59c1.01-7.15,6.38-11.04,14.54-11.04h17.57c1.57,0,2.16.69,1.94,2.26l-1.05,7.47c-.22,1.57-1.01,2.26-2.58,2.26h-14.62c-1.07,0-1.8.75-1.96,1.88s.36,1.88,1.41,2.01l9.17,1.25c5.77.88,9.31,3.39,8.32,10.42l-.93,6.59c-1.01,7.15-6.45,11.04-14.54,11.04H9.95Z"/><path d="m60.14,150.73c-1.57,0-2.16-.69-1.94-2.26l4.33-30.81h-9.22c-1.57,0-2.16-.69-1.94-2.26l1.07-7.59c.22-1.57,1.01-2.26,2.58-2.26h33.13c1.57,0,2.16.69,1.94,2.26l-1.07,7.59c-.22,1.57-1.01,2.26-2.58,2.26h-9.22l-4.33,30.81c-.22,1.57-1.01,2.26-2.58,2.26h-10.16Z"/><path d="m92.39,150.73c-1.57,0-2.16-.69-1.94-2.26l5.71-40.66c.22-1.57,1.01-2.26,2.58-2.26h20.89c9.41,0,11.76,4.27,10.89,10.48l-.41,2.89c-.49,3.51-1.72,6.02-4.52,7.15,4.51.5,7.05,3.83,6.31,9.1l-1.87,13.3c-.22,1.57-1.01,2.26-2.58,2.26h-9.73c-1.57,0-2.16-.69-1.94-2.26l1.35-9.6c.26-1.88-.25-2.7-2.01-2.7h-8.78l-1.73,12.3c-.22,1.57-1.01,2.26-2.58,2.26h-9.66Zm15.55-25.85h4.71c2.2,0,2.94-1.26,3.18-2.95l.3-2.13c.24-1.69-.15-2.95-2.35-2.95h-4.71l-1.13,8.03Z"/><path d="m139.01,150.73c-1.57,0-2.16-.69-1.94-2.26l5.71-40.66c.22-1.57,1.01-2.26,2.58-2.26h29.11c1.57,0,2.16.69,1.94,2.26l-1.03,7.34c-.22,1.57-1.01,2.26-2.58,2.26h-17.32l-.68,4.83h12.24c1.57,0,2.16.69,1.94,2.26l-.94,6.71c-.22,1.57-1.01,2.26-2.58,2.26h-12.24l-.76,5.4h17.32c1.57,0,2.16.69,1.94,2.26l-1.03,7.34c-.22,1.57-1.01,2.26-2.58,2.26h-29.11Z"/><path d="m188.33,150.73h-9.22c-1.57,0-2.16-.69-1.94-2.26l2.33-16.56c.35-2.51,1.55-5.65,3.86-10.04l7.46-14.24c.7-1.44,1.8-2.07,3.49-2.07h16.88c1.63,0,2.55.63,2.85,2.07l3.46,14.24c1.08,4.39,1.39,7.53,1.04,10.04l-2.33,16.56c-.22,1.57-1.01,2.26-2.58,2.26h-9.47c-1.69,0-2.35-.69-2.13-2.26l1.23-8.78h-11.11l-1.23,8.78c-.22,1.57-1.01,2.26-2.58,2.26Zm6.04-22.46h9.85l-1.61-9.54c-.21-.75-.54-1.07-1.04-1.07h-1.57c-.5,0-.92.31-1.34,1.07l-4.29,9.54Z"/><path d="m225.85,150.73c-1.57,0-2.16-.69-1.94-2.26l5.71-40.66c.22-1.57,1.01-2.26,2.58-2.26h10.1c1.32,0,2.06.5,2.62,1.88l4.21,10.23c.33.75.48,1.07.98,1.07h.57c.5,0,.73-.31,1.28-1.07l7.02-10.23c.95-1.38,1.83-1.88,3.15-1.88h10.16c1.57,0,2.16.69,1.94,2.26l-5.71,40.66c-.22,1.57-1.01,2.26-2.58,2.26h-9.66c-1.63,0-2.16-.69-1.94-2.26l3.1-22.09-4.66,6.84c-.96,1.44-1.98,2.01-3.61,2.01h-2.51c-1.63,0-2.49-.56-3.04-2.01l-2.74-6.84-3.1,22.09c-.22,1.57-1.01,2.26-2.58,2.26h-9.35Z"/><path d="m406.45,113.34l-1.73,12.3c-.58,4.14-3.05,7.4-9.07,7.4h-13.87l-2.26,16.06c-.18,1.25-.61,1.63-1.86,1.63h-4.14c-1.26,0-1.58-.38-1.4-1.63l5.85-41.6c.18-1.26.61-1.63,1.86-1.63h19.64c6.02,0,7.56,3.33,6.98,7.47Zm-9.35-.88h-12.42l-1.97,13.99h12.42c1.13,0,2.2-.94,2.36-2.07l1.38-9.85c.16-1.13-.65-2.07-1.78-2.07Z"/><path d="m431.38,150.73c-1.32,0-1.71-.31-1.91-1.57l-1.54-8.22h-15.87l-3.79,8.22c-.55,1.25-1.04,1.57-2.35,1.57h-3.64c-1.26,0-1.45-.38-.91-1.57l20.17-41.73c.55-1.26,1.04-1.57,2.35-1.57h2.76c1.32,0,1.71.31,1.98,1.57l8.57,41.73c.27,1.19-.03,1.57-1.29,1.57h-4.52Zm-4.62-16.25l-3.31-17.95-8.36,17.95h11.67Z"/><path d="m470.38,149.1c-.18,1.25-.61,1.63-1.86,1.63h-23.84c-1.25,0-1.58-.38-1.4-1.63l5.85-41.6c.18-1.26.61-1.63,1.86-1.63h4.14c1.25,0,1.58.38,1.4,1.63l-5.15,36.64h18.07c1.25,0,1.58.38,1.4,1.63l-.47,3.33Z"/></svg>
        </div>
      </Link>
      {user?.email ? 
        <div className='inline-flex absolute right-0 z-20 m-2'>
            <Link to='/'>
            <FaHome className='pb-[0.2rem] text-[1.7rem] mr-4 duration-500 cursor-pointer z-21 text-blapal-500 hover:text-tanpal-500' />
            </Link>
            <FaQuestionCircle className='text-[1.5rem] mr-4 duration-500 cursor-pointer z-21 text-blapal-500 hover:text-tanpal-500' />
            <FaSearch className='text-[1.4rem] mr-4 duration-500 cursor-pointer z-21 text-blapal-500 hover:text-tanpal-500' />
          <Link to='/account' className='group'>
            <FaUser className='text-[1.3rem] mr-4 duration-500 cursor-pointer z-21 text-blapal-500 hover:text-tanpal-500' />
            <div className='absolute top-0 right-0 mt-14 z-50 w-[8rem] h-[2.5rem] items-center justify-center hidden group-hover:block cursor-pointer bg-tanpal-500 border rounded border-blapal-500/50'>
              <p className='p-2 text-sm text-blapal-500'>{user?.email}</p>
            </div>
          </Link>
            <FaSignOutAlt onClick={handleLogout} className='text-[1.5rem] duration-500 cursor-pointer z-21 text-blapal-500 hover:text-tanpal-500' />
        </div> : 
        <div className='z-20'>
          <Link to='/login'>
            <button className='z-21 text-tanpal-500 mr-4 px-4 py-[0.2rem] w-[6rem] drop-shadow-sm border border-tanpal-500/25 rounded hover:bg-tanpal-500/75 pb-2 hover:border-opacity-0 hover:text-blapal-500 duration-500'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='px-4 py-1 pb-2 rounded border drop-shadow-sm duration-500 cursor-pointer z-21 border-tanpal-500/25 text-tanpal-500 bg-purpal-500 hover:border-opacity-0 hover:bg-purpal-600 hover:text-blapal-500'>Sign Up</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Navbar