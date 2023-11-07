import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full z-9 text-tanpal-500'>
        <img 
          className='z-9 w-full h-[400px] object-cover' 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
          alt='signup-Bg'>
        </img>
        <div className='fixed top-0 left-0 w-full h-[400px] bg-gradient-to-t from-blapal-500'></div>
        <div className='absolute top-[20%] p04 md:p-8'>
          <h1 className='text-[1rem] font-bold md:text-5xl ml-[-1.1rem] mt-[-3.5rem]'>Settings</h1>
        </div>
        <div className='mt-[-8rem]'>
          <SavedShows />
        </div>
      </div>
    </>
  )
}

export default Account