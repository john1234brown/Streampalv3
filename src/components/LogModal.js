import React from 'react'
import { useState } from 'react'

const LogModal = ({ isOpen, toggleModal }) => {

  return (
    <>
        {isOpen && (
        <div className='fixed w-screen h-screen inset-0 bg-black/75 flex items-center justify-center z-50'>
            <div className='bg-black/75 z-49 px-[100%] py-[100%]'>
                <div className='bg-red-500/30 rounded border border-red-500/50 py-2 px-2'>
                    <h2 className='text-red-600 drop-shadow-md'>Error</h2>
                    <p className='text-red-600 drop-shadow-md'>You must be logged in to save a movie.</p>
                </div>
                <button 
                className='border border-white text-white py-1 px-6 rounded hover:bg-white/75 hover:text-black hover:border-none mt-8 ml-[6.5rem]' 
                onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
        )}
    </>
  )
}

export default LogModal